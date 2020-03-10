const { email, password } = require('../config/email');
const send = require('gmail-send')({
  user: email,
  pass: password,
  to: email,
  subject: 'Msg from portfolio',
});

module.exports = app => {
  app.post('/api/email', (req, res) => {
    console.log(req.body);
    send(
      {
        text: `Name: ${req.body.name} Email: ${req.body.email} Message: ${req.body.message}`,
      },
      (error, result) => {
        if (error) console.error(error);
        console.log(result);
      }
    );
    res.redirect('/');
  });
};
