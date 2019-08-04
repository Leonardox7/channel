export default class WebService {
    async post(url, data) {
        try {
            let request = {
                method: 'POST',
                headers: new Headers({
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }),
                body: JSON.stringify(data)
            }
            let res = await fetch(url, request)
            return res.json()
        } catch (e) {
            console.log(`Ocorreu um erro.\n${e}`)
        }
    }
}