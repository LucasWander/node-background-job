# Node background

> Simple background tasks in Node.js with redis and bull


# Usage

### **Run redis**

You need to have **docker** installed

```
docker run -d -p 6379:6379 redis:6.0.5
```

You need to have **node v12.18.3** installed

### **Install the depentences**

    yarn install
    # or
    npm install


### **Start Development server**


    yarn queue && yarn start
    # or
    npm run queue &&  npm run start


## License/Licença do Projeto
[MIT License](./LICENSE) © [Lucas Wander de Freitas](https://lucaswander.github.io//)
