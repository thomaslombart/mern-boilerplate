import express from 'express';

import {
  requireAuth
} from '../middlewares';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'Express API boilerplate'
  });
});

router.get('/protected', requireAuth, (req, res, next) => {
  console.log(req);
  res.json({
    message: 'Protected content'
  });
})

export default router;