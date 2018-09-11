/**
 * Arquivo: assincrono.js
 * Autor: Glaucia Lemos
 * Descrição: Exemplo execução síncrona
 * Data: 10/09/2018
 */

console.log('1');

t();

console.log('3');

function t() {
  setTimeout(() => {
    console.log('2');
  }, 10);
}

// Saída: 1,3,2 (pois a função t tem um 'setTimeout de 10s')
