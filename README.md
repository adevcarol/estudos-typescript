Instalação via npm:

``` npm install -g typescript ```

Via npx (gerencia de projeto - usado quando se quer trabalhar com versões de ts diferentes):

``` npm init -y ```

``` npm install typescript -D ``` 

<i>(o ``` -D ``` cria a dependência em modo de desenvolvimento portanto impede que seja enviado peara o deploy)</i>

*Após a instalação é só criar os arquivos utilzando a extenção .ts (ex.: main.ts)


Comando para rodar o código ts a partir do node: ``` npx tsc src/index.ts ```

Criar arquivo de confg do TS:
``` npx tsc --init ```

<i>Este comando irá criar o arquivo tsconfig.json que possui várias linhas configurações que podem ser utilizadas</i>

*Config's sugeridas:
    "rootDir": "./src", ---> Irá definir a pasta padrão como src 
    "outDir": "./build" ---> Informa a pasta de saída

- Ao rodar o comando ``` npx tsc no terminal ``` uma pasta build é criada e dentro dela irá ficar o compiler JS
- Em caso de dúvida sobre o que definir ir até a documentação do TS Config (https://www.typescriptlang.org/tsconfig)

Para finalizar a configuração inicial ir até o arquivo package.json e dentro de "scripts" criar uma nova linha com "start": "npx tsc && node build/index.js"

*Após isso é só dar o comando ``` npm run start no terminal ``` 

