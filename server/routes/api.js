const express = require('express');
const router = express.Router();

router.get('/apiTest', (req, res) => {
  res.send(JSON.stringify({status: 'success'}));
});

module.exports = router;
