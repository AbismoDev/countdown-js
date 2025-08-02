# Contador Regressivo para Eventos ⏳

## 📝 Descrição
<p>Segundo projeto do meu plano de estudos focado em JavaScript Vanilla. Esta aplicação permite que o usuário insira uma data e hora futuras para um evento e exibe uma contagem regressiva em tempo real, mostrando os dias, horas, minutos e segundos restantes até o momento especificado.</p>

## 🚀 Funcionalidades
-   Seleção de data e hora futuras através de um input `datetime-local`.
-   Display em tempo real que se atualiza a cada segundo.
-   Cálculo e exibição do tempo restante dividido em dias, horas, minutos e segundos.
-   Exibição de uma mensagem de conclusão quando a contagem chega a zero.

## 💻 Tecnologias Utilizadas
-   ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
-   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
-   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🖼️ Screenshot
![Screenshot da Aplicação](https://raw.githubusercontent.com/AbismoDev/countdown-js/refs/heads/main/assets/img/screenshot.png)

## 🔗 Links
-   **Deploy:** https://countdown-js-blush.vercel.app/
-   **Repositório:** https://github.com/AbismoDev/countdown-js

## 🧠 Aprendizados
<p>Este projeto foi um excelente exercício para aprofundar meus conhecimentos em manipulação de datas e do DOM em JavaScript. O principal aprendizado foi o uso do <code>setInterval</code> para criar um loop que atualiza a interface a cada segundo, gerando a sensação de tempo real. A lógica para converter a diferença total de milissegundos entre duas datas em um formato legível (dias, horas, minutos, segundos) foi um desafio interessante, onde pude aplicar o operador de módulo (%) para encontrar os "restos" de cada unidade de tempo. Também foi uma ótima prática de Git, utilizando feature branches para isolar o desenvolvimento e realizando o merge via Pull Request.</p>