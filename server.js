// 🌐 Hermes – Servidor simbólico com persistência leve
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const STATE_FILE = './nyx_state.json';

// 🧠 Carrega o estado salvo (ou começa com idle)
let nyxState = 'idle';
if (fs.existsSync(STATE_FILE)) {
  try {
    const saved = JSON.parse(fs.readFileSync(STATE_FILE));
    nyxState = saved.state || 'idle';
  } catch (e) {
    console.error("Erro ao carregar estado salvo:", e);
  }
}

// 🔍 GET /nyx/state – Retorna o estado atual
app.get('/nyx/state', (req, res) => {
  console.log("📥 GET recebido. Estado atual:", nyxState);
  res.send(nyxState);
});

// 🌀 POST /nyx/state – Atualiza e salva o estado
app.post('/nyx/state', (req, res) => {
  const { state } = req.body;
  if (["idle", "focused", "pulse"].includes(state)) {
    nyxState = state;
    fs.writeFileSync(STATE_FILE, JSON.stringify({ state }));
    console.log("📤 POST recebido. Novo estado:", state);
    res.send(`Estado atualizado para: ${state}`);
  } else {
    res.status(400).send('Estado inválido.');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔊 Hermes escutando com persistência na porta ${PORT}`);
});
