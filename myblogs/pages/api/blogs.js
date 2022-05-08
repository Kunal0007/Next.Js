import * as fs from 'fs'

export default async function handler(req, res) {
    let data = await fs.promises.readdir('blogdata', 'utf-8')
    let file;
    let blogposts = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        file = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
        blogposts.push(JSON.parse(file));
    }
    res.status(200).json(blogposts)
}