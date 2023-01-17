
const getUsers = (req, res) => res.status(200).json({ message: 'Rota usuarios'});

module.exports = { getUsers }