import * as fs from 'fs'

export default function handler(req, res) {
    fs.readdir('blogdata', 'utf-8',
        (err, data) => {
            console.log('');
            res.status(200).json(data) 
        }
    ) 
}