## 😎 Sobre o projeto

Trata-se de uma aplicação que realiza a gravação da tela do dispositivo e possibilita o envio do arquivo para a nuvem(Firebase), tal aplicação foi requisitada na matéria de Desenvolvimento para Dispositivos Móveis no curso de Engenharia de Software do [Centro Universitário FAG](https://www.fag.edu.br/). Foi desenvolvido utilizando Typescript(superset de JS) e o framework React Native. Na solução é possível realizar a gravação da tela, listagem das gravações, envio da gravação para nuvem(Firebase) e remoção do arquivo do dispositivo e da nuvem caso tenha sido realizado upload.

---

## 🤓 Tecnologias utilizadas

* 🔤 Lang - [TypeScript](https://www.typescriptlang.org/)
* ⚛️ Framework - [React Native](https://reactnative.dev/)
* ✨ Estilização - [Styled Components](https://styled-components.com/)
* 💾 Storage - [Firebase](https://rnfirebase.io/)
* 🤯 Animações - [Lottie Files](https://lottiefiles.com/)
* 📹 Recording - [React Native Record Screen](https://github.com/yutasuzuki/react-native-record-screen)
* 🗃 Manipulação Arquivos - [React Native FS](https://github.com/itinance/react-native-fs/)

---

## 🖼🖌Telas do projeto

###  *Realizando Gravação da Tela*
![recording](https://user-images.githubusercontent.com/61207420/170528581-18fccf89-a9e2-40ed-a8ce-01e85f9ce98f.gif)

###  *Enviando para o Firebase*
![sendFirebase](https://user-images.githubusercontent.com/61207420/170528691-8965de90-6bd7-4cd6-ae2e-d8ad721b6d31.gif)

###  *Removendo Gravação*
![removeAll](https://user-images.githubusercontent.com/61207420/170528153-c56bf1c8-32f5-434f-bd7b-7d63066daccb.gif)

###  *Scroll de diversas Gravações*
![scroll](https://user-images.githubusercontent.com/61207420/170528841-179ec8c3-e1e0-437f-ae6f-a93333f3d6e8.gif)

---

## 🧑‍💻 Como iniciar a aplicação

Para executar o projeto será necessário o emulador do Android Studio ou um dispositivo físico. Documentação sobre o assunto 👉 https://react-native.rocketseat.dev/

Primeiro vamos baixar todas as dependências do projeto:

```bash
npm install
# or
yarn install
```

Agora vamos executar o servidor de desenvolvimento:

```bash
npm start
# or
yarn start
```

Vamos inicializar o emulador:

```bash
npm android
# or
yarn android 
```

O aplicativo abrirá automaticamente ao fim do comando yarn android.

⚠️ **Importante**

Neccessário ter uma conta no [Firebase](https://firebase.google.com/) e seguir a configuração descrita no [link](https://www.section.io/engineering-education/react-native-firebase-storage/) para realizar integração correta do serviço com a aplicação.

---

## 📃 Licença

Este projeto está sobre a licença [Apache 2.0](LICENSE).

___

## 🔝 Melhorias

Refatorar [setTimeOut](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) para [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback).

Caso queira me ajudar com o projeto ficarei muito feliz em aceitar seu pull request 😀.