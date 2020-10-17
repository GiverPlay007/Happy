const Database = require('./database');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

  // await db.run('DROP TABLE orphanages');
  // return;

  await saveOrphanage(db, {
    name: 'Sol',
    about: 'Aqui as crianças gostam do Sol.',
    instructions: 'Venha de amarelo',
    opening_hours: 'O dia inteiro',
    open_on_weekends: '1',
    whatsapp: '62 12345-6789',
    lat: '-27.4166991',
    lng: '-49.8471861',
    images: [
      'https://i.pinimg.com/originals/6e/b5/da/6eb5dabc0d91c7f14e18c8fd7fc6c057.jpg',
      'https://img3.stockfresh.com/files/p/photography33/m/94/2182152_stock-photo-kids-playing-with-magnifying-glass-in-park.jpg',
      'https://image.freepik.com/fotos-gratis/crianca-feliz-explorando-a-natureza-com-lupa_21730-1708.jpg',
      'https://images.freeimages.com/images/premium/previews/5534/55341440-two-girls-playing.jpg',
      'https://image.freepik.com/fotos-gratis/duas-meninas-de-crianca-asiatica-bonito-brincando-com-o-aviao-de-brinquedo-de-madeira-no-campo_7186-2199.jpg',
      'https://image.freepik.com/fotos-gratis/duas-meninas-felizes-de-criancas-pequenas-se-divertindo-para-brincar-juntas-e-sentado-na-passarela-de-bambu-no-arrozal-em-tom-de-cor-vintage_7186-1274.jpg'
    ].toString()
  });

  await saveOrphanage(db, {
    name: 'Estrela',
    about: 'Aqui as crianças gostam de estrelas em geral.',
    instructions: 'Venha de brilho',
    opening_hours: 'O dia inteiro',
    open_on_weekends: '1',
    whatsapp: '62 12345-6789',
    lat: '-27.2166991',
    lng: '-49.6471861',
    images: [
      'https://i.pinimg.com/originals/6e/b5/da/6eb5dabc0d91c7f14e18c8fd7fc6c057.jpg',
      'https://img3.stockfresh.com/files/p/photography33/m/94/2182152_stock-photo-kids-playing-with-magnifying-glass-in-park.jpg',
      'https://image.freepik.com/fotos-gratis/crianca-feliz-explorando-a-natureza-com-lupa_21730-1708.jpg',
      'https://images.freeimages.com/images/premium/previews/5534/55341440-two-girls-playing.jpg',
      'https://image.freepik.com/fotos-gratis/duas-meninas-de-crianca-asiatica-bonito-brincando-com-o-aviao-de-brinquedo-de-madeira-no-campo_7186-2199.jpg',
      'https://image.freepik.com/fotos-gratis/duas-meninas-felizes-de-criancas-pequenas-se-divertindo-para-brincar-juntas-e-sentado-na-passarela-de-bambu-no-arrozal-em-tom-de-cor-vintage_7186-1274.jpg'
    ].toString()
  });

  await saveOrphanage(db, {
    name: 'Lua',
    about: 'Aqui as crianças gostam da Lua.',
    instructions: 'Venha de branco',
    opening_hours: 'A noite inteira',
    open_on_weekends: '1',
    whatsapp: '62 12345-6789',
    lat: '-27.0166991',
    lng: '-49.3471861',
    images: [
      'https://i.pinimg.com/originals/6e/b5/da/6eb5dabc0d91c7f14e18c8fd7fc6c057.jpg',
      'https://img3.stockfresh.com/files/p/photography33/m/94/2182152_stock-photo-kids-playing-with-magnifying-glass-in-park.jpg',
      'https://image.freepik.com/fotos-gratis/crianca-feliz-explorando-a-natureza-com-lupa_21730-1708.jpg',
      'https://images.freeimages.com/images/premium/previews/5534/55341440-two-girls-playing.jpg',
      'https://image.freepik.com/fotos-gratis/duas-meninas-de-crianca-asiatica-bonito-brincando-com-o-aviao-de-brinquedo-de-madeira-no-campo_7186-2199.jpg',
      'https://image.freepik.com/fotos-gratis/duas-meninas-felizes-de-criancas-pequenas-se-divertindo-para-brincar-juntas-e-sentado-na-passarela-de-bambu-no-arrozal-em-tom-de-cor-vintage_7186-1274.jpg'
    ].toString()
  });

  // return;

  const sel = await db.all("SELECT * FROM orphanages;");
  console.log(sel);

  const res = await db.all('SELECT * FROM orphanages WHERE name = "Sol";');
  console.log(res);

  await db.run('DELETE FROM orphanages WHERE id = "3";');
});