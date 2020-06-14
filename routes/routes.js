// Get JS files
const details = require('../core/functions/details.js');
const cv = require('../core/functions/curriculum-vitae.js');

exports.routes = (route, db) => {

  let index_path = __dirname.replace('routes','') + "/views/index.html";
  // Rounting for classic http requests
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
