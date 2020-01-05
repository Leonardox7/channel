const EmailController = require('../controllers/email-controller')

class EmailRoute {
    constructor(app) {
        this.app = app
        this.emailController = new EmailController()
    }

    route() {
        this.app.post('/email/send', this.emailController.send.bind(this.emailController))
    }
}

module.exports = EmailRoute
