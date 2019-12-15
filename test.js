const express = require('express');

const test = express();

test.get('/', (req, res) => {
    res.render('/test/test.html')
})

test.listen(3000, () => console.log('test server listen on 3000'))