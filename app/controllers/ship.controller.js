const { request, response } = require("express");
const db = require("../models");
const Ship = db.ship;


const getShip = async (request, response) => {
    try {
      const ship = await Ship.find();
      response.status(200).json(ship);
    } catch (error) {
      response.status(500).json(error);
    }
  };
  
  
  const getShipById = async (request, response) => {
    try {
      const ship = await Ship.findById(request.params.id);
      response.status(200).json(ship);
    } catch (error) {
      response.status(500).json(error);
    }
  };
  
  
  const createShip = async (request, response) => {
    try {
      const ship = await Ship.create(request.body);
      response.status(201).json(ship);
    } catch (error) {
      response.status(500).json(error);
    }
  };
  
  
  const updateShip = async (request, response) => {
    try {
      const ship = await Ship.findByIdAndUpdate(request.params.id, request.body, {
        new: true,
      });
      response.status(200).json(ship);
    } catch (error) {
      response.status(500).json(error);
    }
  };
  
  
  const deleteShip= async (request, response) => {
    try {
      const ship = await Ship.findByIdAndDelete(request.params.id);
      response.status(200).json(ship);
    } catch (error) {
      response.status(500).json(error);
    }
  };
  
  module.exports = {
    getShip,
    getShipById,
    createShip,
    updateShip,
    deleteShip,
  };