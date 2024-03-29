const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/getData', (req, res) => {
	const {
		params: { keyword }
	} = req;

	return res.send({});
});

module.exports = router;
