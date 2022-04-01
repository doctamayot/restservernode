const { response, request } = 'express';

const usuariosGet = (req = request, res = response) => {
  const { nombre = 'no hay', q } = req.query;
  res.json({ msg: 'get api', nombre, q });
};

const usuariosPost = (req, res) => {
  const body = req.body;
  res.json({ msg: 'post api', body });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;
  res.json({ msg: 'put api', id });
};

const usuariosPatch = (req, res) => {
  res.json({ msg: 'patch api' });
};

const usuariosDelete = (req, res) => {
  res.json({ msg: 'delete api' });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
  usuariosPut,
};
