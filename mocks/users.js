import { on } from 'mokapi'

export default function() {
    on('http', function(request, response) {
        switch (request.path['id']) {
            case '123':
                response.data = { id: '123', name: 'foo' }
                return true
            default:
                response.statusCode = 404
                response.data = null
                return true
        }
    })
}