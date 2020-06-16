// Get JS files
const details = require('../core/functions/details.js');
const cv = require('../core/functions/curriculum-vitae.js');
const login = require('../core/functions/login.js');

exports.routes = (route, db) => {

  // Paths
  let index_path = __dirname.replace('routes','') + "/views/index.html";
  let login_path = __dirname.replace('routes','') + "/views/login.html";

  // Rounting for classic http requests
    /* GET */
  route.get('/', (req, res) => {
    res.sendFile(index_path);
  });

  route.get('/CurriculumVitae', (req, res) => {
    res.sendFile(index_path);
    res.redirect('/#/CurriculumVitae');
  });

  route.get('/details', (req, res) => {
    res.sendFile(index_path);
    res.redirect('/#/details');
  });

  route.get('/login', (req, res) => {
    res.sendFile(login_path);
  });

    /* POST */
  route.post('/login', (req, res) => {
    login.connection(req, res, db);
  });

  route.post('/logout', (req, res) => {
    login.logout(req, res, db);
  });

  // Routing for Angular
  route.get('/ng-CurriculumVitae', (req, res) => {
    cv.getCV(req, res, db);
  });

  route.get('/ng-details', (req, res) => {
    details.getdetails(req, res, db);
  });

  // 404
  route.all('*', (req, res) => {
    res.sendFile(index_path);
    res.redirect('/#/404');
  })
}
