# Desafio: CRUD com Ingestão de Dados via API e Excel

Este projeto consiste em um sistema completo com frontend, backend e uma função serverless para ingestão de dados a partir de uma API externa e de arquivo xlsx.

---

## ✨ Tecnologias Utilizadas

### Frontend
- **Next.js** com **TypeScript**
- **TailwindCSS** para estilização
<!-- - **ShadCN** para componentes de UI reutilizáveis -->

### Backend
- **Node.js** com **Express**
- CRUD completo com suporte a upload de imagem
- Armazenamento de dados (mysql)

### Ingestão de Dados (Serverless)
- **AWS Lambda** com **Node.js**
- Leitura de dados via:
  - API pública (TMDB)
  - Arquivo Excel `.xlsx`
- Envio dos dados para a API do backend para persistência no banco

---

## 📦 Funcionalidades

### CRUD
- Criar, listar, editar e deletar registros
- Upload e visualização de imagens
- Interface moderna e responsiva

### Ingestão via Lambda
- Consulta a API de filmes e ingestão automatizada de dados
- Leitura e processamento de grandes volumes de dados a partir de arquivos `.xlsx`

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone
