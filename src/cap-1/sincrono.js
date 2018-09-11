/**
 * Arquivo: sincrono.js
 * Autor: Glaucia Lemos
 * Descrição: Exemplo execução síncrona
 * Data: 10/09/2018
 */

console.log('1'); // saída 1

t(); // saída 2

console.log('3'); // saída 3

function t() {
  console.log('2');
}

// Saída no console: 1,2,3
