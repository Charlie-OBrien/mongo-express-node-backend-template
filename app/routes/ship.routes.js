const express = require("express");

const {
  getShip,
  getShipById,
  createShip,
  updateShip,
  deleteShip,
} = require("../controllers/ship.controller");

const router = express.Router();

router.get("/ship", getShip);

router.get("/ship/:id", getShipById);

router.post("/ship", createShip);

router.put("/ship/:id", updateShip);

router.delete("/ship/:id", deleteShip);

module.exports = router;