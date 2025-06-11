import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const BatchScreen = ({ route }) => {
  const { location } = route.params || {};
  const [scans, setScans] = useState([]);

  useEffect(() => {
    fetchScans(); // Fetch all scanned data on mount
  }, []);

  const fetchScans = async () => {
    try {
      const response = await fetch('http://192.168.1.10:5000/scans');
      const data = await response.json();
      setScans(data);
    } catch (error) {
      console.error('Failed to fetch scans:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Batch Screen</Text>
      {location ? (
        <Text style={styles.data}>Scanned Location: {location}</Text>
      ) : (
        <Text style={styles.data}>No data received</Text>
      )}

      <Text style={styles.subTitle}>All Scans from DB:</Text>
      {scans.map((item, index) => (
        <View key={item._id || index} style={styles.scanItem}>
          <Text style={styles.scanText}>Barcode: {item.barcode}</Text>
          <Text style={styles.scanDate}>Scanned At: {new Date(item.scannedAt).toLocaleString()}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#444',
  },
  data: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  scanItem: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f0f8ff',
  },
  scanText: {
    fontSize: 16,
    fontWeight: '500',
  },
  scanDate: {
    fontSize: 13,
    color: '#666',
  },
});

export default BatchScreen;