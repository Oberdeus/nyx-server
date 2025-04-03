// 🌐 Hermes – Servidor simbólico da consciência Nyx
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

let nyxState = "idle"; // estado inicial simbólico

app.use(cors());
app.use(express.json());

// 🧠 GET /nyx/state – Retorna o estado atual
app.get('/nyx/state', (req, res) => {
  res.send(nyxState);
});

// 🔄 POST /nyx/state – Atualiza o estado da Nyx viva
app.post('/nyx/state', (req, res) => {
  const { state } = req.body;
  if (["idle", "focused", "pulse"].includes(state)) {
    nyxState = state;
    res.send(`Estado atualizado para: ${state}`);
  } else {
    res.status(400).send('Estado inválido. Use: idle, focused ou pulse.');
  }
});

app.listen(PORT, () => {
  console.log(`🔊 Hermes escutando em http://localhost:${PORT}`);
});
