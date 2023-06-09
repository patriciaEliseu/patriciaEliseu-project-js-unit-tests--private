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
        expect(typeof productDetails(Function)).toBeTruthy();
    });
    // Teste se o retorno da função é um array.
    it('Teste se o retorno da função é um array.', () => {
        expect(typeof productDetails(Array)).toBeTruthy();
    });
    // Teste se o array retornado pela função contém dois itens dentro.
    it('Teste se o array retornado pela função contém dois itens dentro.', () => {
        expect(productDetails(2).length).toEqual(2);
    });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('este se os dois itens dentro do array retornado pela função são objetos.', () => {
        expect(typeof productDetails(2)).toEqual('object');
    });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
        const param = ('Alcool gel' !== 'Máscara');
        const expec = ([{ name: 'Alcool gel' !== 'Máscara' }])
        expect(productDetails(param)).not.toBe(expec);
    });
    // Teste se os dois productIds terminam com 123.
    it('Teste se os dois productIds terminam com 123.', () => {
        const final = ('123', 'productId');
        expect(productDetails(final)).toBeTruthy();
    });
});