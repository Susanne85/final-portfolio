const router = require('express').Router();
const { User } = require('../../models');
const writeFile = require('fs');

// CREATE new user
router.post('/', async (request, response) => {
  console.log('usernanme',request.body.username);
  console.log('usernanme',request.body.email);
  console.log('usernanme',request.body.password);

  try {
    const dbUserData = await User.create({
      username: request.body.username,
      email: request.body.email,
      password: request.body.password,
    });

    request.session.save(() => {
      request.session.user_id = dbUserData.id;
      request.session.username = dbUserData.username;
      request.session.email = dbUserData.email;
      request.session.loggedIn = true;
      response.status(200).json(dbUserData);
    });
  } catch (error) {
    response.status(500).json(error);
  }
});

// Login
router.post('/login', async (request, response) => {
  console.log('API User routes useremail',request.body.email);
  try {
    const dbUserData = await User.findOne({
      where: {
        email: request.body.email,
      },
    });

    if (!dbUserData) {
      response.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(request.body.password);

    if (!validPassword) {
      response.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    request.session.save(() => {
      request.session.user_id = dbUserData.id;
      request.session.username = dbUserData.username;
      request.session.email = dbUserData.email;
      request.session.loggedIn = true;
      response.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Logout
router.post('/logout', (request, response) => {
  if (request.session.loggedIn) {
    request.session.destroy(() => {
      response.status(204).end();
    });
  } else {
    response.status(404).end();
  }
});

router.post('/download', (request, response) => {
  console.log ('API Resume');

  const resume = request.body.resume;
  try {
    const pdfWrite = writeFile.writeFileSync('./output/resume.pdf' , resume,'utf-8');
    response.status(200).json({ message: 'PDF resume was been downloaed!' });
  }
  catch (error) {
    res.status(500).json(error);
  }
 
});
module.exports = router;
