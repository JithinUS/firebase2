import axios from 'axios';

export async function postAPI(path, body) {
    try {
        const response = await axios.post(path, body, {
            headers: {
                'Authorization': 'Bearer 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'
            }
        });
        return response.data
    } catch (e) {
        return { error: e.response }
    }
}