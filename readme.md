## 😎 Sobre o projeto

Trata-se de uma aplicação que realiza a gravação da tela do dispositivo e possibilita o envio do arquivo para a nuvem(Firebase), tal aplicação foi requisitada na matéria de Desenvolvimento para Dispositivos Móveis no curso de Engenharia de Software do [Centro Universitário FAG](https://www.fag.edu.br/). Foi desenvolvido utilizando Typescript(superset de JS) e o framework React Native. Na solução é possível realizar a gravação da tela, listagem das gravações, envio da gravação para nuvem(Firebase), remoção do arquivo do dispositivo e da nuvem caso tenha sido realizado upload e também a possibilidade de compartilhar a gravação criada. A fim de evitar a criação de grandes arquivos o tempo máximo de gravação é 1 minuto, após isso a gravação é encerrada e o usuário é informado com uma notificação push. 

---

## 🤓 Tecnologias utilizadas

* 🔤 Lang - [TypeScript](https://www.typescriptlang.org/)
* ⚛️ Framework - [React Native](https://reactnative.dev/)
* ✨ Estilização - [Styled Components](https://styled-components.com/)
* 💾 Storage - [Firebase](https://rnfirebase.io/)
* 🔔 Notificações - [Notifee](https://notifee.app/)
* 🤯 Animações - [Lottie Files](https://lottiefiles.com/)
* 🔄 Compartilhamento - [React Native Share](https://react-native-share.github.io/react-native-share/)
* 📹 Recording - [React Native Record Screen](https://github.com/yutasuzuki/react-native-record-screen)
* 🗃 Manipulação Arquivos - [React Native FS](https://github.com/itinance/react-native-fs/)

---

## 🖼🖌Telas do projeto

###  *Icon e Splash Screen*
![splashScreen](https://user-images.githubusercontent.com/61207420/170888964-3f38cdee-0323-496a-9ff7-d9f04837ed9a.gif)

###  *Realizando Gravação da Tela*
![recording](https://user-images.githubusercontent.com/61207420/170888977-6d1a6b7d-7f79-457b-b20d-708e4c7f570c.gif)

###  *Enviando para o Firebase*
![sendFirebase](https://user-images.githubusercontent.com/61207420/170889007-a9d032e8-1a9c-4ba9-991b-781d21e9ee3c.gif)

###  *Compartilhando Gravação*
![share](https://user-images.githubusercontent.com/61207420/170889018-9c3dbb2f-b1d4-41dc-b269-fd606ae81b05.gif)

###  *Removendo Gravação*
![remove](https://user-images.githubusercontent.com/61207420/170889034-640e3c69-8cb2-498d-8985-1b1a0552d3d7.gif)

###  *Scroll de diversas Gravações*
![scroll](https://user-images.githubusercontent.com/61207420/170889045-df6f9f55-72ba-4d4d-b588-ee2c05846867.gif)

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