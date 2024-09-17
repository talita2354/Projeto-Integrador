const { Developer } = require('../models');

exports.create = async (req, res) => {
  try {
    console.log('Creating developer', req.body);
    const { name, value,skills ,education ,contact } = req.body;
    const developer = await Developer.create({ name, value,skills,education, contact });
    res.status(200).json(developer);
  } catch (error) {
    console.log('entrou no controller error', error.message);

    res.status(400).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const develope = await Developer.findAll();
    res.status(200).json(develope);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const developer = await Developer.findByPk(id);
    if (!developer) {
      return res.status(404).json({ error: 'Desenvolvedor não encontrado' });
    }
    res.status(200).json(developer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



