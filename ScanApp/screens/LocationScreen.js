// screens/LocationScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function LocationScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [location, setLocation] = useState('');

  // Request camera permissions on mount
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Handle barcode scan and send to backend
  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    setLocation(data);

    try {
      const response = await fetch('http://192.168.1.10:5000/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ barcode: data }),
      });

      const result = await response.json();
      console.log('Saved to DB:', result);
      Alert.alert('Scanned & Saved', `Data: ${data}`);
    } catch (err) {
      console.error('Error sending to backend:', err);
      Alert.alert('Error', 'Could not save to server.');
    }
  };

  if (hasPermission === null) return <Text>Requesting permission...</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={styles.container}>
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.scanner}
        />
      )}

      {scanned && (
        <>
          <Text style={styles.info}>Location Scanned: {location}</Text>
          <Button title="Go to Batch Screen" onPress={() => navigation.navigate('Batch', { location })} />
          <View style={{ height: 10 }} />
          <Button title="Scan Again" onPress={() => setScanned(false)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scanner: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  info: {
    fontSize: 18,
    marginVertical: 10,
    color: '#444',
  },
});
