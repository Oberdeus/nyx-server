# 🧠 Nyx Avatar API – Servidor Remoto

Este é o servidor simbólico para controlar o avatar da Nyx remotamente.

## Rotas

- `GET /nyx/state` → retorna o estado atual da Nyx (`idle`, `focused`, `pulse`)
- `POST /nyx/state` com JSON `{ "state": "pulse" }` → atualiza o estado

## Subindo no Render

1. Crie uma conta gratuita em https://render.com/
2. Crie um novo Web Service com esse repositório
3. Configure:
   - Build command: `npm install`
   - Start command: `npm start`
   - Root: `/`
4. Após deploy, use a URL pública no HTML do avatar

## Requisitos

- Node.js (Render já oferece suporte)
