const EmailController = require('../controllers/emailController')

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