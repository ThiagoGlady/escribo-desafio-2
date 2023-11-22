# API para o Processo Seletivo Escribo
#### Esta é minha solução para o segundo desafio técnico do processo seletivo da Escribo

## Descrição
#### A API implementada nesse processo satisfaz o pedido do segundo desafio técnico
#### "Desenvolver uma API RESTful para autenticação de usuários, que permita operações de cadastro (sign up), autenticação (sign in) e recuperação de informações do usuário."

## Como Aplicar o banco de dados
### 1. Clonar o repositório
#### No seu terminal, navegue para o diretório aonde deseja clonar o projeto usando o comando:
```
cd caminho-do-diretório 
```
###### *Exemplo de caminho: "C:\Users\Perfil\Documents"*
#### Depois, clone o repositório usando este seguinte comando no seu terminal:
```
git clone https://github.com/ThiagoGlady/escribo-desafio-2.git
```
#### Caso você esteja usando windows, baixe e instale o [Git for Windows](https://git-scm.com/download/win) para abrir o GitBash e use o comando nele.

### 2. Certifique-se de ter o MySQL instalado e um banco de dados ativo
#### Para o funcionamento correto do projeto, é preciso ter um banco de dados já em funcionamento. Se você não tem o MySQL na máquina, certifique-se de [baixá-lo aqui](https://dev.mysql.com/downloads/). Recomendado o "MySQL Shell" ou o "MySQL Installer for Windows". Se precisar, [aqui tem um tutorial](https://www.youtube.com/watch?v=a5ul8o76Hqw&t=320s) de como fazer a instalação e configurações necessárias.

### 3. Instalar Dependências
#### Certifique-se de ter o [Node.js](https://nodejs.org/en/download) instalado. Em seguida, no diretório "processo",  use o comando:
```
npm install
```

### 4. Mude o .env.example
#### Ao clonar o repositório, você verá um arquivo chamado ".env.example". Primeiro, tire o ".example", deixando apenas .env. Em seguida, adicione os dados que a API precisa para algumas funções.
#### **PORT**: A porta que a API vai abrir para a URL. O padrão é 3001.
#### **HOST**: O host do servidor. O padrão é localhost.
#### **USER**: O usuário do seu MySQL. O padrão é root.
#### **PASSWORD**: A senha do seu usuário. O padrão é root.
#### **DATABASE**: O nome do seu banco de dados criado.
#### **SECRET**: A senha que você deseja para ser a chave secreta do JWT.

### 5. Inicie a API
#### No seu terminal, use o comando:
```
npm start
```


