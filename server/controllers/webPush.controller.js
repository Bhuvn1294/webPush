const webpush = require('web-push');

const PUBLIC_VAPID = 'BLU1Yj-fNCl7xXUy1Z-j0PFf4l3gHPlxtKxwi-0o1umeu26h_Ro2B4fJv3YbUfBiukTJskT-TjwfVj5TFhAw8YE'
const PRIVATE_VAPID = 'b-cNpx0Vn-OGTRWul-t3pWOxxdIEjSKkzisjM4b5my0'

webpush.setVapidDetails('mailto:example@yourdomain.org', PUBLIC_VAPID, PRIVATE_VAPID);


let fakeDatabase;


function pushInFakeDb(req, res, next) {
    const subscription = req.body
    fakeDatabase = subscription;
}


function sendNotification(req, res, next) {
    const notificationPayload = {
        notification: {
            title: 'New Notification',
            body: 'This is the body of the notification',
            icon: 'assets/icons/icon-512x512.png',
            data: { url: "https://angular.io/api/service-worker/SwPush" },
        },
    }

    const promises = []
    //fakeDatabase.forEach(subscription => {})

    console.log("\n\n\n\n\n", fakeDatabase)

    webpush.sendNotification(fakeDatabase, JSON.stringify(notificationPayload))
        .then(() => res.json({ status: true, data: 'sent' }))

    console.log("\n\n\n\n\n", promises)

    Promise.all(promises)
        .then(() => res.json({ status: true, data: 'sent' }))
}


function generateVAPIDKeys(req, res, next) {
    const vapidKeys = webpush.generateVAPIDKeys();
    res.json({ status: true, data: vapidKeys })
}


export default {
    sendNotification,
    generateVAPIDKeys,
    pushInFakeDb
}

