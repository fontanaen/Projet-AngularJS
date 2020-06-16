const DB = require('../class_DB');
const crypto = require('crypto');

exports.connection = (req, res, db) => {
  let DB_Model = new DB(db);
  let login = req.body.login;
  let password = crypto.createHmac('sha256', req.body.password)
	               .update('jojofags suck')
	               .digest('hex');

  (async () => {
    let confirm = await DB_Model.login_check(login, password);
    if (confirm.length == 1) {
      req.session.islog = true;
      res.json({islog : true, user : confirm});
    }
    else res.json({islog : false});
  })();
}

exports.logout = (req, res, db) => {
  req.session.islog = false;
  res.json({islog : false})
}
