# Desafio Técnico Front-end: Dashboard de Reconhecimento de Placas

## Visão Geral
Bem-vindo(a) ao desafio técnico para a vaga de bolsista!
O objetivo deste teste é avaliar suas habilidades no desenvolvimento de interfaces com **React** e sua capacidade de integrar o Front-end com uma API Restful.

Nós construímos um motor de Visão Computacional em Python que recebe a imagem de um veículo e retorna a placa lida e o nível de confiança da leitura. **Sua missão é construir o Dashboard (interface) que o usuário utilizará para interagir com essa IA.**

## O que você precisa fazer
Crie uma aplicação em React (Vite, Create React App ou Next.js) que contenha:

1. Uma área para o usuário fazer upload de uma imagem (foto de um carro com a placa visível).
2. Um botão para enviar a imagem para a nossa API.
3. Um painel para exibir os resultados retornados pela API (A placa lida e a % de confiança).
4. Exibição da imagem que foi enviada como "preview" na tela.

## A API (Backend Fornecido)
Você não precisa criar o motor de Inteligência Artificial. Siga os passos abaixo para rodar a nossa API localmente e fazer a sua integração.

### 1. Requisitos para rodar a API
Você precisa ter o **Python na versão 3.12.3** instalado. No seu terminal, instale as dependências executando o comando abaixo:

```bash
pip install -r requirements.txt
```

### 2. O Código da API
O código da API já está disponível neste repositório no arquivo `backend.py`. Ele contém todo o motor de processamento de imagens e já está configurado com o CORS para permitir as requisições do seu Front-end.

### 3. Executando a API
No terminal, dentro da pasta do repositório, execute o comando:

```bash
python backend.py
```

A API ficará disponível em `http://localhost:8000`. A documentação da api está `http://localhost:8000/docs` O endpoint que o seu React deverá chamar via requisição POST (enviando um `FormData` com a chave `file`) é:
**`http://localhost:8000/api/recognize-plate`**

---

## Requisitos Obrigatórios do seu Frontend
* A interface deve ser clara e intuitiva.
* Você deve tratar estados de carregamento (exibir um "Loading..." enquanto a API processa a imagem).
* Você deve tratar erros (ex: o que acontece se a API estiver desligada ou ocorrer um erro de conexão?).

## Diferenciais (Bônus)
Estes itens não são obrigatórios, mas farão seu teste se destacar:

* **Responsividade:** O Dashboard funciona bem na tela de um celular?
* **Histórico:** Salvar os últimos resultados lidos na sessão atual e exibi-los em uma tabela na tela (sem precisar de banco de dados).
* **Métricas:** Uso de alguma biblioteca de gráficos (ex: Recharts, Chart.js) para mostrar a média de confiança das últimas leituras.

## Critérios de Avaliação
1. **Organização:** Estrutura de pastas e componentes do React.
2. **Consumo de API:** Como você estruturou a requisição e gerenciou os dados assíncronos.
3. **Estado:** Uso correto de hooks do React (ex: `useState`, `useEffect`).
4. **UX/UI:** Cuidado com a Interface e a Experiência do usuário (ex: evitar que o usuário envie o formulário sem uma imagem).

## Como Entregar
1. Desenvolva sua solução em um repositório seu (pode ser um fork deste ou um novo projeto).
2. Escreva um `README.md` **no seu projeto frontend** explicando o passo a passo de como instalar as dependências e rodá-lo (ex: `npm install`, `npm run dev`).
3. Envie o link do repositório público para o e-mail: juliocartier@gmail.com (Use o assunto: Desafio Front-end - [Seu Nome])

Boa sorte e divirta-se codando!