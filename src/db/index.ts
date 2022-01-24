require('dotenv').config();
import mongoose = require('mongoose');

if (process.env.DB_URI) {
  mongoose.connect(process.env.DB_URI).catch((err) => {
    throw new Error(err);
  });
} else {
  throw new Error('DB_URI deve ser definido no .env');
}

export default mongoose;
