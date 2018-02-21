const express = require('express');
const routes = require('./routes/index.js');
const app = express();

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });
const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './react-ui/build')));

app.get('*', function(request, response){
  response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.listen(port, () => console.log('Example app listening on port 3000!'));

routes(app);
