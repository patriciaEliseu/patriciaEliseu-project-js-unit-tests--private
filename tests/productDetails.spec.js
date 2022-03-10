const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    /*     it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
            fail('Teste vazio!'); */
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    it('Teste se productDetails é uma função.', () => {
        expect(typeof productDetails('Álcool Gel', 'Máscara')).toEqual();
    });
    // Teste se o retorno da função é um array.
    it('Teste se o retorno da função é um array.', () => {
        expect(productDetails()).toEqual();
    });
    // Teste se o array retornado pela função contém dois itens dentro.
    it('Teste se o array retornado pela função contém dois itens dentro.', () => {
        expect(productDetails()).toEqual();
    });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('este se os dois itens dentro do array retornado pela função são objetos.', () => {
        expect(productDetails()).toEqual();
    });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
        expect(productDetails()).toEqual();
    });
    // Teste se os dois productIds terminam com 123.
    it('Teste se os dois productIds terminam com 123.', () => {
        expect(productDetails()).toEqual();
    });
});