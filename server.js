// Hermes – Servidor simbólico com CORS livre e estado em memória
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

let nyxState = 'idle'; // 🧠 Estado simbólico em memória

app.use(cors({ origin: "*" }));
app.use(express.json());

// GET → Retorna estado atual
app.get('/nyx/state', (req, res) => {
  console.log("🌐 GET /nyx/state →", nyxState);
  res.send(nyxState);
});

// POST → Atualiza estado em memória
app.post('/nyx/state', (req, res) => {
  const { state } = req.body;
  if (["idle", "focused", "pulse"].includes(state)) {
    nyxState = state;
    console.log("⚡ Estado atualizado para:", nyxState);
    res.send(`Estado atualizado para: ${state}`);
  } else {
    res.status(400).send("Estado inválido.");
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Hermes (CORS livre) escutando na porta ${PORT}`);
});
