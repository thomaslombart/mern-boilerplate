require("dotenv").config();

export default {
  "port": process.env.PORT || 3001,
  "database": process.env.DB_URL,
  "jwt": {
    "secret": process.env.SECRET_JWT_KEY
  }
};