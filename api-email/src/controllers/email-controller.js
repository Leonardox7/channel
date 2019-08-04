const EmailService = require('../services/email-service')
const Log = require('../services/logger')

class EmailController {
    constructor() {
        this.emailService = new EmailService()
    }

    async send(req, res, next) {
        if (!req.body.to) {
            res.status(400).send({ message: 'Email obrigatório.', statusCode: 400 })
            return next()
        }

        if (!req.body.subject) {
            res.status(400).send({ message: 'Assunto obrigatório.', statusCode: 400})
            return next()
        }

        if (!req.body.text) {
            res.status(400).send({ message: 'Texto obrigatório.', statusCode: 400 })
            return next()
        }

        try {
            await this.emailService.send(req.body.to, req.body.subject, req.body.text)
            res.status(200).send({ message: 'Email enviado!', statusCode: 200})
        } catch (e) {
            Log.error(e)
            res.status(500).send({ message: 'Ocorreu um erro.', statusCode: 500 })
        }

        return next()
    }
}
module.exports = EmailController