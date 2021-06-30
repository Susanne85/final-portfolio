const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const formRoutes = require('./form-routes.js');
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/form', formRoutes);
module.exports = router;
