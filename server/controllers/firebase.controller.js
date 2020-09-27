const admin = require('./firebase-config.js')

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

function sendNotification() {
    const registrationToken = req.body.registrationToken
    const message = req.body.message
    const options = notification_options

    admin.messaging().sendToDevice(registrationToken, message, options)
        .then(response => {
            res.status(200).send("Notification sent successfully" + response)
        })
        .catch(error => {
            console.log(error);
        });

}


