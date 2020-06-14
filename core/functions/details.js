const DB = require('../class_DB');

exports.getdetails = (req, res, db) => {
  let DB_Model = new DB(db);
  (async () => {
    let details = await DB_Model.getdetails();
    let languages = await DB_Model.getlanguages();
    let softwares = await DB_Model.getlogiciels();
    let links = await DB_Model.getLinks();
    res.send({details : details, languages : languages, softwares : softwares, links : links});
  })();
}
