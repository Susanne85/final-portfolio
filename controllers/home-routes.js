const router = require('express').Router();
const { Assignment } = require('../models');
const readFile = require('fs');
const path = require('path');
const pdfparse = require('pdf-parse');
console.log('starting home routes');

router.get('/', async (request, response) => {
  console.log('Home Routes - homepage', request.session.loggedIn);
  try {
    const dbAssignmentSearchData = await Assignment.findAll({
    });

    const assignments = dbAssignmentSearchData.map((assignmentData) =>
      assignmentData.get({ plain: true })
    );
    response.render('homepage', {
      assignments,
      loggedIn: request.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    response.status(500).json(err);
  }
});

router.get('/login', async (request, response) => {
  console.log('Home Routes - login', request.session.loggedIn);
  if (request.session.loggedIn) {
    response.render('homepage', { loggedIn: request.session.loggedIn });
    return;
  }
  response.render('login');
});

router.get('/signup', async (request, response) => {
  console.log('Home Routes - signup');
  if (request.session.loggedIn) {
    response.render('homepage', { loggedIn: request.session.loggedIn });
    return;
  }
  response.render('signup');
});

router.get('/resume', async (request, response) => {
  console.log('Home Routes - resume');
  const pdfFile = readFile.readFileSync('./public/docs/resume.pdf');
   
  pdfparse(pdfFile).then(function(data) {
    const text = data.text;
    response.render('resume', { text });
  })
  .catch (function(err) {
    console.log('unable to retrieve pdf file', err);
    response.status(500).json(err);
  });
}
);
module.exports = router;
