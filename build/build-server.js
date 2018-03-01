import express from 'express';
import path from 'path';
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.config.dev'


const port = 3000;
const app = express();

const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
    res.json([
        { "id": 1, "firstName": "abdul", "lastName": "ripon", "gender": "male", "email": "riponwen@gmail.com", "Phone": "+19292182399" },
        { "id": 2, "firstName": "kazi", "lastName": "noor", "gender": "male", "email": "knoor@gmail.com", "Phone": "+16465919630" },
        { "id": 3, "firstName": "md", "lastName": "rahman", "gender": "male", "email": "wwmrahman@gmail.com", "Phone": "+13475039266" },
        { "id": 4, "firstName": "fahmida", "lastName": "nazneen", "gender": "female", "email": "fahmida.dev@gmail.com", "Phone": "+19293653392" },
        { "id": 5, "firstName": "hasan", "lastName": "tarek", "gender": "male", "email": "hasantarek.nyc@gmail.com", "Phone": "+3476004038" }
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port)
    }
});