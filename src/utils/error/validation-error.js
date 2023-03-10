const { StatusCodes } = require('http-status-codes');
const { AppError } = require('./index');

class ValidationError extends AppError {
    constructor(error) {
        let explanation = [];
        error.errors.forEach((err)=>{
            explanation.push(err.message);
        }) 

        this.name = 'ValidationError',
        this.message = 'Not able to validate the data sent in the request',
        this.explanation = explanation;
        this.statusCode = StatusCodes.BAD_REQUEST; 
    }
};

module.exports = ValidationError;