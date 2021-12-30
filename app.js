const express = require ('express');

const os = require ('os');
const net = os.networkInterfaces();
const app = express();

const ip = Object.values(net)
            .flat()
            .filter((item)=> !item.internal && item.family === 'IPv4')
            .find(Boolean).address;




app.get ('/', (req,res,next)=> {
    res.send('Request Header Parser')
    console.log (Object.values(net))
})

app.get ('/api/whoami', (req,res,next)=> {
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    const ipaddress = '127.0.0.1';
    res.json({
        ipaddress,
        language,
        software
    })
})

module.exports = app;