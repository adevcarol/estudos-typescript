// tipos primitivos: boolean, number, string
let ligado:boolean = false; // o :boolean serve para travar o tipo da variável e ela não poderá receber um tipo que são seja do mesmo tipo do declarado
let nome:string = "carol";
let idade:number = 28;

// tipos especiais: null, undefined
let nulo:null = null;
let indefinido:undefined = undefined;

// tipos abrangentes: any, void
let retorno:void;
let retornoView:any = false;

// objeto - sem presivibilidade
let produto:object = {
    name: "carol",
    cidade: "bm",
    idade: 30,
}

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "tenis",
    preco: 125.90,
    unidades: 12,
}

/*
 * arrays
 */

let dados: string[] = ["carol", "ana", "maria"]; // ou
let dados2: Array<string> = ["carol", "ana", "maria"];

// array de multitipos
let infos: (string | number)[] = ["carol", 28]; // não é muito usual

/*
 * tuplas
 */

let boleto:[string, number, number] = ["agua conta", 199.9, 252557657] // é possível determinar a posição dos tipos diferentemente dos arrays de multitipos

/*
 * métodos de array
 */

dados.pop()

/*
 * datas
 */

let aniversario: Date = new Date("2022-12-01 05:00")
console.log(aniversario.toDateString())

/*
 * funções
 */

function addNumber(x: number, y: number): number{
    return x + y; 
}

function addToHello(name: string): string{
    return `Hello ${name}`;
}

// funções podem aceitar mais de um parametro como tipo
function callToPhone(phone: number | string): number | string{
    return phone;
}

async function getDatabase(id: number): Promise<string>{ // promisse
    return "carol"
}

let soma: number = addNumber(4, 7);
let nameFunction: string = addToHello("CAROL");
console.log(soma);
console.log(nameFunction);

/*
 * interfaces (type x interface)
 */

type robot = { // para tipar um obj
    readonly id: number;
    name: string;
};

interface robot2 { // para trabalhar com classes
    id: number | string;
    name: string;
}

const bot1: robot2 = {
    id: 1,
    name: "megaman",
};

const bot2: robot2 = {
    id: 1,
    name: "megaman",
};

console.log(bot1);
console.log(bot2);