import WebService from './web-service'

export default class EmailService {
    constructor() {
        this.webService = new WebService()
    }

    async send(data) {
        return await this.webService.post('http://localhost:8085/email/send', data)
    }
}