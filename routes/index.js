const express = require("express");
const router = express.Router();

// include product controller
const product_controller = require("../controllers/product");

// routes
router.get("/", product_controller.all_products);
router.post("/create", product_controller.product_create);
router.get("/:id", product_controller.product_details);
router.put("/update/:id", product_controller.product_update);
router.delete("/delete/:id", product_controller.product_delete);

/* /* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

module.exports = router;
