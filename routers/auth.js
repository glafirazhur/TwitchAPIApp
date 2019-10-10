import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.json({ message: 'ok' });
  // save token to cookies
});

router.get('/callback', (req, res) => {
  console.log('THERE IS AN AUTH REQUEST CALLBACK');
  // save token to cookies
});

export default router;
