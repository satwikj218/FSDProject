module.exports = app =>{
    const registers = require('../controllers/register.controller.js');

    //create a new register
    app.post ("/register1",registers.create);
    //single user
    app.get('/register1/:username/:password',registers.findOne);
}