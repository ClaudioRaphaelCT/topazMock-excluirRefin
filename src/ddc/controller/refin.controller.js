const { responseOK, responseNOK } = require('../utils/responses');

exports.postRefin = (req, res) => {
  const { numeroBeneficio } = req.body;
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ status: 'NOK', message: 'O corpo da solicitação está ausente ou vazio.' });
  }
  if (numeroBeneficio == 34184742510) {
    res.status(400).json(responseNOK);
  }
  res.status(200).json(responseOK);
};
