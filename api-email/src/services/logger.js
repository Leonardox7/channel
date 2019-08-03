const colors = require('colors')
const moment = require('moment')

var date = moment().format('DD-MM-YY HH:mm:ss')

class Logger {

    static info(msg) {
        console.log(colors.blue(`info ${date}`), msg)
    }

    static warn(msg) {
        console.log(colors.yellow(`warn ${date}`), msg)
    }

    static error(msg) {
        console.log(colors.red(`error ${date}`), msg)
    }

    static sucess(msg) {
        console.log(colors.green(`sucess ${date}`), msg)
    }
}

module.exports = Logger