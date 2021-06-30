const router = require('express').Router();

router.get('/form', async (request, response) => {
    console.log('Home Routes - form', request.url);
    response.render('form');
  });
  
module.exports = router;
