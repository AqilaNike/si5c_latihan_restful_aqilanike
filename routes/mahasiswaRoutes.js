const express = require('express');
const router = express.Router();
const c = require('../controllers/mahasiswaController');
const verifyToken = require('../middlewares/verifyToken');
const hanyaRole = require('../middlewares/hanyaRole');

router.get('/', c.getAll);
router.get('/:id', c.getById);
// role admnin dan user
router.post('/', verifyToken, hanyaRole('user', 'admin'), c.create);
router.put('/:id', verifyToken, hanyaRole('admin'), c.update);
//
router.delete('/:id', verifyToken, hanyaRole('admin'), c.remove);

module.exports = router;