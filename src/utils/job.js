const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/emailConfig');

const setupJobs = async ( ) => {

    cron.schedule('*/2 * * * *', async() => {
        console.log('running a task every two minutes');
        const response = await emailService.fetchPendingEmails();
        console.log(response);
        response.forEach((email)=>{
            sender.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            },async(err,data)=>{
                if(err) {
                    throw err;
                }else {
                    console.log(data);
                    await emailService.update(email.id,{status:"SUCCESS"})
                }
            })
        })
    });

}

module.exports = setupJobs;