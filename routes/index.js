module.exports = function (app) {

  // The routes through the website
  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  console.log('hey');
};
