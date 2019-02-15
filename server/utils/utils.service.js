const { to } = require('await-to-js');
const pe = require('parse-error');

module.exports.to = async (promise) => {
  let err, res;
  [err, res] = await to(promise);
  if (err) return [pe(err)];

  return [null, res];
};

module.exports.ReE = function (res, err, code) { // Error Web Response
  err = errorHandler(err);

  if (typeof code !== 'undefined') res.statusCode = code;

  return res.json({ success: false, error: err });
};

function errorHandler(err) { // Throw Exception
  if (typeof err == 'object' && typeof err.message != 'undefined') {
    err = err.message;
  }
  console.error(err);

  return err;
};
module.exports.TeE = errorHandler;

module.exports.ReS = function (res, data, code) { // Success Web Response
  let send_data = { success: true };

  if (typeof data == 'object') {
    send_data = Object.assign(data, send_data);//merge the objects
  }

  if (typeof code !== 'undefined') res.statusCode = code;

  return res.json(send_data)
};
