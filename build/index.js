"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// tipos primitivos: boolean, number, string
let ligado = false; // o :boolean serve para travar o tipo da variável e ela não poderá receber um tipo que são seja do mesmo tipo do declarado
let nome = "carol";
let idade = 28;
// tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// tipos abrangentes: any, void
let retorno;
let retornoView = false;
// objeto - sem presivibilidade
let produto = {
    name: "carol",
    cidade: "bm",
    idade: 30,
};
let meuProduto = {
    nome: "tenis",
    preco: 125.90,
    unidades: 12,
};
/*
 * arrays
 */
let dados = ["carol", "ana", "maria"]; // ou
let dados2 = ["carol", "ana", "maria"];
// array de multitipos
let infos = ["carol", 28]; // não é muito usual
/*
 * tuplas
 */
let boleto = ["agua conta", 199.9, 252557657]; // é possível determinar a posição dos tipos diferentemente dos arrays de multitipos
/*
 * métodos de array
 */
dados.pop();
/*
 * datas
 */
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toDateString());
/*
 * funções
 */
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
// funções podem aceitar mais de um parametro como tipo
function callToPhone(phone) {
    return phone;
}
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "carol";
    });
}
let soma = addNumber(4, 7);
let nameFunction = addToHello("CAROL");
console.log(soma);
console.log(nameFunction);
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
};
console.log(bot1);
console.log(bot2);
