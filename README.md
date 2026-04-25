#  Flappy Ranking

Aplicação full stack de um jogo estilo Flappy Bird com sistema de autenticação e ranking global.

---

##  Tecnologias

###  Frontend

![React](https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Next](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

###  Backend
![Node](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/express.js-404D59?style=for-the-badge)

###  Banco de Dados

![PostgreSQL](https://img.shields.io/badge/postgresql-316192?style=for-the-badge&logo=postgresql&logoColor=white)

###  Comunicação

* REST API (HTTP)

---

##  Funcionalidades

* Sistema de login com autenticação de usuário e modo visitante 
* Jogo estilo Flappy Bird
* Ranking global e ranking pessoal de cada jogador
* Atualização do ranking ao final de cada partida
* Customização do personagem 
* Loja de cosméticos com opções de cores

---

##  Fluxo da Aplicação

1. O usuário acessa a aplicação
2. Realiza login ou cadastro
3. Inicia o jogo
4. Ao perder:

   * O score é enviado para o backend
   * O backend salva no banco de dados
   * O ranking global é recalculado
   * O ranking atualizado é retornado
5. O usuário visualiza:

   * Ranking global
   * Sua posição no ranking

---

##  Estrutura do Projeto

```plaintext
flappy-ranking/
├── backend/
│   ├── src/
│         
│
├── frontend/
│   ├── src/
│     
│
└── README.md
```

---

##  Próximas Melhorias

* Alternar entre modo claro ou escuro
* Definir ou editar nickname do usuário
* Visualizar histórico de partida do jogador
* Reiniciar partida rapidamente

---

##  Autores

Projeto desenvolvido por

- [Jucyara Ferreira de Santana](https://github.com/JucyaraFerreira)  
- [Guilherme Venancio de Moura](https://github.com/RanmaYT)

##  Status

 Em desenvolvimento.