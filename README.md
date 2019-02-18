# node-project-pos

![GitHub Logo](/imagens/node-imagem.png)

Projeto NodeJS + ExpressJS + Postgres DB como serviço para atender os requisitos de performance elaborado na minha pós.

1 - Use npm start package para iniciar a aplicação
        Package chama node ./bin/www
        WWW -> cria as configurações de server e adiciona o app no server criado
        APP 
            Possui as Routers disponíveis na aplicação
            Principal Router: app.use('/api/blockchair', validateRouter);
            Add as configurações do Serviço usando Express.js -> use encode / ambiente

2 - Criado as rotas dos serviços para obtenção dos BlockschainList
    http://server-name/api/blockchair

3- Obter um blockchair específico da list
    http://server-name/api/blockchair/{id}

