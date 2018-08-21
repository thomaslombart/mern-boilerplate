require('dotenv').config();

export default {
  port: process.env.PORT || 3001,
  database: process.env.DB_URI,
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
  },
};
