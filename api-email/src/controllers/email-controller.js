const EmailService = require('../services/email-service')
const Success = require('../utils/response').Success
const _Error = require('../utils/response')._Error
const BadRequest = require('../utils/response').BadRequest

class EmailController {
    constructor() {
        this.emailService = new EmailService()
    }

    async send(req, res, next) {
        try {
            if (!req.body.to) {
                throw new BadRequest('Email obrigatório.')
            }

            if (!req.body.subject) {
                throw new BadRequest('Assunto obrigatório.')
            }

            await this.emailService.send(req.body.to, req.body.subject, req.body.text)
            new Success({ message: 'Email enviado!', statusCode: 200 }).send(res)
        }
        catch (e) {
            new _Error(e).send(res)
        }
    }

}

module.exports = EmailController

