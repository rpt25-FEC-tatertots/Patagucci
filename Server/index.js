const express = require('express')
const App = express();
const Port = process.env.PORT || 6000

App.use(express.static('./Public'))
App.listen(Port, () => console.log(`Server is listening on port ${Port}`))