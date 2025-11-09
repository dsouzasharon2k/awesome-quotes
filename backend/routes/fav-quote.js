const express = require('express')
const router = express.Router()
const db = require('../utils/db')
const createResult = require('../utils/result')
const multer = require('multer')
const upload = multer({ dest: 'images/' })
const fs = require('fs')


