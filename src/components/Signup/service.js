import { postAPI } from "../../api"
import axios from 'axios';

export async function openAI(data) {
    let body = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": data
            }
        ]
    }
    const Details = postAPI(`https://api.openai.com/v1/chat/completions`,body)
    return Details
}

export async function post(path, body) {
    try {
        const response = await axios.post(path, body)
        return response.data
    } catch (e) {
        return { error: e.response }
    }
}