# 📚 Trabalho Final: Modelagem de Dados

Projeto fullstack para cadastro de usuários, produtos e compras, usando **Node.js**, **Sequelize** e **MySQL**. Desenvolvido como parte de um trabalho escolar.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- Cors
- MySQL
- dotenv

---

## 📦 Instalação e execução

### 1. Clone o repositório:

```bash
git clone https://github.com/ericscapini22/modelagem_dados_final.git
```

### 2. Instale as dependências:

```bash
npm install express sequelize cors mysql2 dotenv
```

### 3. Configure o banco de dados:

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=compras_db     # ⚠️ NÃO altere este nome
PORT=3000
```

> 💡 O nome do banco (`compras_db`) deve ser exatamente esse.

```bash
node sync.js
```

### 4. Rode o projeto:

```bash
node index.js
```

---

## ✍️ Autor

Feito por **Eric D. Scapini** – Trabalho escolar para a disciplina de **Modelagem de Dados**.