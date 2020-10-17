const Database = require('./database');

Database.then(async db => {

  await db.run(`
    INSERT INTO orphanages (
      lat,
      lng,
      name,
      about,
      whatsapp,
      images,
      instructions,
      opening_hours,
      open_on_weekends
    ) VALUES (
      "-27.2166991",
      "-49.6471861",
      "Lar das meninas",
      "Presta assistêndia à crianças de 6 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
      "64 1919-1919",
      "https://i.pinimg.com/originals/6e/b5/da/6eb5dabc0d91c7f14e18c8fd7fc6c057.jpg",
      "Venha como se sentir a vontade e traga muito amor e paciência para dar",
      "Horário de visitas Das 18h até as 8h",
      "1"
    );
  `);

  const sel = await db.all("SELECT * FROM orphanages;");
  console.log(sel);

  const res = await db.all('SELECT * FROM orphanages WHERE id = "1";');
  console.log(res);
});