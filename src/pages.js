module.exports = {

  index(req, res) 
  {
    const city = req.query.city;
    return res.render('index');
  },

  orphanage(req, res)
  {
    return res.render('orphanage');
  },

  orphanages(req, res)
  {
    return res.render('orphanages');
  },

  createOrphanage(req, res)
  {
    return res.render('create-orphanage');
  }

}