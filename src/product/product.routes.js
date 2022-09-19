const router = require('express').Router();
const controller = require('./product.controller');

router.get("/product/:id", controller.getById);
router.get("/products", controller.getAll);
router.get("/products2", controller.getAll);

router.get("/element/:id", controller.getById);
router.get("/elements", controller.getAll);
router.get("/elements2", controller.getAll);

module.exports = router;