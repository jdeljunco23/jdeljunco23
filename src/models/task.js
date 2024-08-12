require('dotenv').config();
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }
});

const Task = model('Task', TaskSchema);

module.exports = Task;
