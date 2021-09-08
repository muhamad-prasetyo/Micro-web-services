const express = require('express');
const router = express.Router();
const isBase64 = require('is-base64');
const base64Img = require('base64-img');

router.post('/', (req, res) => {
  const image = req.body.image;
 
  // * mengecek apakah parameter image ini base64 atau tidak 
  if (!isBase64(image, { mimeRequired: true })) 
  {
    return res.status(400).json({ status: 'error', message: 'invalid base64' });
  }

  return res.send('okee');
});


module.exports = router;