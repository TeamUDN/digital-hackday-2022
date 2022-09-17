# digital-hackday-2022
Docker + Vue CLI の構成で開発する際の土台

### Docker起動
```
docker compose up --build
```

### Dockerのコンテナに入る
```
docker exec -it vue-cli /bin/bash
```

### local server 起動
```
npm run serve
```

### build
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
