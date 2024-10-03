const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('list users');
});

router.get('/detail', (req, res) => {
    res.send('detail users');
});

module.exports = router;