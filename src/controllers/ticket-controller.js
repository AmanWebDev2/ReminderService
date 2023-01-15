const TicketService = require('../services/email-service');

const create = async(req,res) => {
    try {
        console.log(req.body);
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            message: 'successfully registered an email reminder',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            data: {},
            message: 'unable to register an email reminder',
            err: error
        })
    }
}

module.exports = {
    create
}