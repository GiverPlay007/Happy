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
  },

  async saveOrphanage(req, res)
  {
    const fields = req.body;

    if(Object.values(fields).includes(''))
    {
      return res.send('Todos os campos devem ser preenchidos.');
    }

    try{
      const db = await Database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends
      });

      return res.redirect('/orphanages');
    }
    catch(error)
    {
      console.log(error);
      return res.send('Erro interno: Falha ao salvar o orfanato no banco de dados.')
    }
  }
}