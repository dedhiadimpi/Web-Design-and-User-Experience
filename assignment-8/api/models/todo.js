//consist of mongoDB schema and model
'use strict';
//import mongoose
const mongoose = require('mongoose');
//get the schema and store it in variable Schema
const Schema = mongoose.Schema;

//create schema
let TodoSchema = new Schema({

    title: {
        type: String,
        required: "title is required"
    },

    content: {
        type: String
    },

    dueDate: {
        type: Date,
    },

    completed:{
        type: Boolean,
    },

    createdDate: {
        type: Date,
        default: Date.now
    },

    modifiedDate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
TodoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TodoSchema.set('toJSON', {
    virtuals: true
});

//create model for storing to-dos
mongoose.model('todo', TodoSchema);
