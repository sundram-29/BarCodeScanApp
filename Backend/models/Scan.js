import mongoose from 'mongoose';

// Define schema for scanned barcode data
const scanSchema = new mongoose.Schema({
  barcode: {
    type: String,
    required: true,
  },
  scannedAt: {
    type: Date,
    default: Date.now, // Automatically set timestamp when saved
  },
});

// Create model from schema and export
const Scan = mongoose.model('Scan', scanSchema);
export default Scan;
