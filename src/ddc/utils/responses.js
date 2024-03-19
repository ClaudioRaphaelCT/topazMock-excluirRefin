const responseOK = {
  competenciaInicioDesconto: 202102,
  listaContratosReativados: [
    {
      numeroContrato: 'C_8011069347_1061',
    },
    {
      numeroContrato: 'C_8011069347_1062',
    },
  ],
  mensagem: 'Inclusão efetuada com sucesso',
  numeroContrato: 'C_8011069347_1064',
  codigoSucesso: 'BD',
  hashOperacao: 735645,
};

const responseNOK = {
  message: 'ERROR!!',
};

module.exports = { responseNOK, responseOK };
