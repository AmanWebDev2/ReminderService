
const validateNotificationRequest = (req,res,next) => {
    if(
        !req.body.subject ||
        !req.body.content ||
        !req.body.notificationTime ||
        !req.body.recepientEmail ||
        !req.body.status 
    ) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'something went wrong',
            err: 'missing parameter in the request body'
        })
    }
}

module.exports = {
    validateNotificationRequest
};