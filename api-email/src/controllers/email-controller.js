const EmailService = require('../services/emailService')
const Log = require('../services/logger')

class EmailController {
    constructor() {
        this.emailService = new EmailService()
    }

    async send(req, res, next) {
        if (!req.body.to) {
            res.status(400).send({ message: 'Email obrigatório.' })
            return next()
        }

        if (!req.body.subject) {
            res.status(400).send({ message: 'Assunto obrigatório.' })
            return next()
        }

        if (!req.body.text) {
            res.status(400).send({ message: 'Texto obrigatório.' })
            return next()
        }

        try {
            await this.emailService.send(req.body.to, req.body.subject, req.body.text)
            res.status(200).send({ message: 'Email enviado!' })
        } catch (e) {
            Log.error(e)
            res.status(500).send({ message: 'Ocorreu um erro.' })
        }

        return next()
    }
}
module.exports = EmailController