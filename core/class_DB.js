class DB {
  constructor(db) {
    this.db = db;
  }

  async getMissions() {
    let query = 'SELECT * FROM angular_test.exp_pro ORDER BY debut DESC';
    return this.doQuery(query);
  }

  async getFormations() {
    let query = 'SELECT * FROM angular_test.formations ORDER BY annee_obtention DESC';
    return this.doQuery(query);
  }

  async getdetails() {
    let query = 'SELECT * FROM angular_test.users WHERE id = 1';
    return this.doQuery(query);
  }

  async getlanguages() {
    let query = 'SELECT * FROM angular_test.languages ORDER BY niv_maitrise DESC';
    return this.doQuery(query);
  }

  async getLinks() {
    let query = 'SELECT List.nom, Liens.lien, List.img FROM angular_test.liens AS Liens JOIN angular_test.list_liens AS List ON List.id = Liens.id_lien';
    return this.doQuery(query);
  }

  async getlogiciels() {
    let query = 'SELECT * FROM angular_test.logiciels ORDER BY id';
    return this.doQuery(query);
  }

  // core functions
  async doQuery(query) {
    let pro = new Promise((resolve, reject) => {
      this.db.query(query, (err, result) => {
        if (err) throw err;
        else resolve(result);
      });
    });
    return pro.then((val) => {
      return val;
    });
  }
}

module.exports = DB;
