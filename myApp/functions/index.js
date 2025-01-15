import * as functions from 'firebase-functions'; 
import openai from 'openai';

const ai = new openai({
    apiKey: "", 
})
export const obj = functions.https.onRequest({cors: true}, async (req, res) => {
    const text = req.query.text; 
    const response = await ai.chat.completions.create({
        model: "gpt-4o", 
        messages: [{
            role: "user", 
            content: [
                {type: "text", text: "write a poem about " + text + " in 80 words or less"}
            ]
        }]
    });
    let target = response.choices[0].message["content"].toString(); 
    res.status(200).send(target); 
    return res.end(); 
})