const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors'); // Importa o pacote cors
const db = require('./models');
const { swaggerUi, specs } = require('./docs/swagger');

const app = express();
app.use(express.json());
dotenv.config();
app.use(bodyParser.json());

// Configura o CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Defina a origem permitida ou use '*' para permitir todas as origens
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Aplica o middleware de CORS

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); // Middleware para Swagger
app.use('/', require('./routes'));

// app.use(express.static(path.join(__dirname, './client/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './client/build', '/'));
// });

const PORT = process.env.PORT_APP || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
