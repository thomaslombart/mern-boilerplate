import express from 'express';
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json({
    message: 'Express API boilerplate'
  });
});

export default router;