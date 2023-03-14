const { request, response } = require("express");
const db = require("../models");
const People = db.people;


const getPeople = async (request, response) => {
    try {
      const people = await People.find();
      response.status(200).json(people);
    } catch (error) {
      response.status(500).json(error);
    }
  };
  
  
  const getPeopleById = async (request, response) => {
    try {
      const people = await People.findById(request.params.id);
      response.status(200).json(people);
    } catch (error) {
      response.status(500).json(error);
    }
  };
  
  
  const createPeople = async (request, response) => {
    try {
      const people = await People.create(request.body);
      response.status(201).json(people);
    } catch (error) {
      response.status(500).json(error);
    }
  };
  
  
  const updatePeople = async (request, response) => {
    try {
      const people = await People.findOneAndUpdate(
        { _id: { $eq: request.params.id } }, 
        request.body, 
        { new: true }
      );
      response.status(200).json(people);
    } catch (error) {
      response.status(500).json(error);
    }
  };
  
  
  const deletePeople = async (request, response) => {
    try {
      const people = await People.findByIdAndDelete(request.params.id);
      response.status(200).json(people);
    } catch (error) {
      response.status(500).json(error);
    }
  };
  
  module.exports = {
    getPeople,
    getPeopleById,
    createPeople,
    updatePeople,
    deletePeople,
  };