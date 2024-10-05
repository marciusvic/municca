### Repositório voltado para desafio
## Municca - Desafio Backend
- Descrição do desafio no arquivo `municca-challenge.txt`

## Como rodar o projeto
1. Clone o repositório
### Backend
1. Entre na pasta `backend-municca`
2. No diretório raiz, execute o comando `npm install`
3. Após a instalação das dependências, execute o comando `sudo docker-compose up --build` ou `docker-compose up --build` caso esteja no Windows
4. Use Postman ou Insomnia para criar um usuário, a rota é `localhost:8000/api/auth/register` e o corpo da requisição é:
```json
{
    "name":"Márcio",
    "role":"ADMIN",
    "email":"marcio@municca.com",
    "password":"senha123"
}
```

### Frontend
1. Entre na pasta `frontend-municca`
2. No diretório raiz, execute o comando `npm install`
3. Após a instalação das dependências, execute o comando `npm start`

## Tecnologias utilizadas
- TypeScript (Ambos)
- Node.js (Backend)
- Express.js (Backend)
- Prisma (Backend)
- Docker (Backend)
- Postgres (Backend)
- React.js (Front-end)
- Axios (Front-end)
- Material-UI (Front-end)
- TailwindCSS (Front-end)
