
const winston = require('winston')
const colorizer = winston.format.colorize();
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: 'DD-MM-YY HH:mm:ss' }),
        winston.format.simple(),
        winston.format.printf(msg =>  colorizer.colorize(msg.level, `${msg.timestamp} - ${msg.level}: `) + `${msg.message}`)
    ),
    transports: [new winston.transports.Console()]

})

class Logger {
    static info(msg) {
        logger.info(msg)
    }

    static warn(msg) {
        logger.warn(msg)
    }

    static error(msg) {
        logger.error(msg)
    }

    static sucess(msg) {
        logger.sucess(msg)
    }
}

module.exports = Logger