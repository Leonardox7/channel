const Log = require('./logger')
const nodemailer = require('nodemailer');

class EmailService {
    async transporter() {
        try {
            return nodemailer.createTransport({
                service: 'gmail',
                port: 587,
                secure: false,
                auth: { user: process.env.EMAIL, pass: process.env.PASS }
            })
        } catch (e) {
            Log.error(e)
        }
    }

    async send(to, subject, text) {
        try {
            let transport = await this.transporter()
            return transport.sendMail({
                to: to,
                subject: subject,
                text: text,
                html:`<b>${text}</b>`
            })
    } catch(e) {
        Log.error(e)
    }
}

}

module.exports = EmailService