const { AppError } = require('./index');

class ClientError extends AppError {
    constructor(name,message,explanation,statusCode) {
        super(name,message,explanation,statusCode)
    }
}

module.exports = ClientError;