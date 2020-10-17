const Database = require('./database/database');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

  index(req, res) 
  {
    const city = req.query.city;
    return res.render('index');
  },

  async orphanage(req, res)
  {
    const id = req.query.id;

    if(!id)
    {
      return res.send('ID inválido');
    }

    try
    {
      const db = await Database;
      const result = await db.all(`SELECT * FROM orphanages WHERE id = ${id}`);
      const orphanage = result[0];

      orphanage.images = orphanage.images.split(',');
      orphanage.firstImage = orphanage.images[0];

      orphanage.open_on_weekends = orphanage.open_on_weekends == "1";

      return res.render('orphanage', { orphanage });
    }
    catch(error)
    {
      console.log(error);
      return res.send('Erro interno: Falha ao consultar banco de dados');
    }
  },

  async orphanages(req, res)
  {
    try
    {
      const db = await Database;
      const orphanages = await db.all(`SELECT * FROM orphanages`);
      return res.render('orphanages', { orphanages });
    }
    catch(error)
    {
      console.log(error);
      return res.send('Erro interno: Falha ao consultar banco de dados');
    }
  },

  createOrphanage(req, res)
  {
    return res.render('create-orphanage');
  }

}