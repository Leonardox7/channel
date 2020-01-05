const Log = require('../services/logger')

const STATUS_SUCCESS = 200
const STATUS_INTERNAL_SERVER_ERROR = 500
const STATUS_BAD_REQUEST = 400

class Success {
    constructor(message = '') {
        this.message = message
    }

    send(res) {
        res.status(STATUS_SUCCESS).send(this.message)
    }
}

class _Error {
    constructor(message = {}) {
        this.message = message
    }

    send(res) {
        this.printError()
        const status = this.message.status || STATUS_INTERNAL_SERVER_ERROR
        res.status(status).send(this.message)
    }

    printError() {
        if (!this.message.status) {
            Log.error(this.message)
        }
    }
}

class BadRequest {
    constructor(message = {}) {
        this.message = message
        this.status = STATUS_BAD_REQUEST
    }
}

module.exports = {
    Success,
    _Error,
    BadRequest
}