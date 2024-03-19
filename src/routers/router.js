const express = require('express');
const router = express.Router();
const { postRefin } = require('../ddc/controller/refin.controller');

router.put('/emprestimos/excluir-refin', postRefin);

module.exports = router;
