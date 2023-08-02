const express= require("express");
const router = express.Router();

router.use("/products", require("./product.routes"));
router.use("/users", require("./auth.routes"));
router.use("/orders", require("./order.routes"));
router.use("/stores", require("./store.routes"));
router.use("/categories", require("./category.routes"));
router.use("/brands", require("./brand.routes"));

module.exports = router;

