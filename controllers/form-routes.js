const router = require('express').Router();

router.get('/form', async (request, response) => {
    console.log('Form - form', request.url);
    response.render('form');
  });
  
module.exports = router;
