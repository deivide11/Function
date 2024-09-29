//  Funções ou Métodos

/* Função é o nome recebido nas linguagens de programação estruturadas.

Método é o nome recebido em linguagens Orientadas a Objetos(00) */

// Tem dois objetivos principais:
// 1° Realizar ações (movimento, alterações), por isso sempre
// tem um nome que inicia com um verbo.
// 2° Reaproveitar código e evitar repetições.

// Sua estrutura: function nome(argumentos){ operações }

// Função que exibe um texto no console:
function imprimirTexto(texto){
    console.log("Texto enviado:", texto);
}

// Função que retorna um texto formatado
function formatarTexto(texto, formato){
    if(formato == "maiuscula"){
        return texto.toUpperCase();
    } else if(formato == "minuscula"){
        return texto.toLowerCase();
    } else {
        console.log("ERRO! Formato informado inválido");
        return texto; 
    }
}

var meuTexto = "Eu sou o filhinho da mamãe!";

// Imprime a variável usando nossa função
imprimirTexto(meuTexto);

// Imprime um texto enviado direto na função
imprimirTexto("Vamos tirar uma foto?");

// Formata a variável para maiuscila usando nossa função
// Mas visualmente nada acontece.
formatarTexto(meuTexto, "maiuscula");

// Agora formata e exibe no console.
console.log(formatarTexto(meuTexto, "maiuscula"));

// Formata o texto e coloca em uma nova variável
var maiuscula = formatarTexto(meuTexto, "maiscula");
console.log("Formatado: ", maiuscula);