const DB = require('../class_DB');

exports.getCV = (req, res, db) => {
  let DB_Model = new DB(db);

  (async () => {
    let missions = await DB_Model.getMissions();
    let formations = await DB_Model.getFormations();
    res.send({missions : missions, formations : formations});
  })();
}
