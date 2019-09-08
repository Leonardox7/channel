const nodemailer = require('nodemailer');

class EmailService {
    async transporter() {
        return nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: { user: process.env.EMAIL, pass: process.env.PASS }
        })
    }

    async send(to, subject, text) {
        let transport = await this.transporter()
        return transport.sendMail({
            to: to,
            subject: subject,
            html: `<b>${text}</b>`
        })

    }

}

module.exports = EmailService