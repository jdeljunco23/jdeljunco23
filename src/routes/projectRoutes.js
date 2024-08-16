require('dotenv').config();
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/', projectController.createProject);

router.get('/:id', projectController.getProjectById);

router.get('/', projectController.getAllProjects);

router.put('/:id', projectController.updateProject);

router.delete('/:id', projectController.deleteProject);

module.exports = router;