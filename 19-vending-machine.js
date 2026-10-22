/*
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección
 * del producto.
 * - El programa retornará el nombre del producto y un array con el dinero
 *   de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe,
 *   deberá indicarse con un mensaje y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas
 *   de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */
const coins = [200, 100, 50, 10, 5];
const products = {
  1: { name: "coca", price: 10 },
  2: { name: "chocolate", price: 50 },
  3: { name: "water", price: 5 },
  4: { name: "brownie", price: 100 },
  5: { name: "usb", price: 500 },
};

const vendingMachine = function (cash, prod) {
  let userMoney = 0;
  const chosenProduct = products[prod];
  let change = [];
  for (let value of cash) {
    if (!coins.includes(value)) {
      return {
        message: "Tipo de moneda incorrecto",
        change: cash,
      };
    }
    userMoney += value;
  }
  if (chosenProduct === undefined) {
    return {
      message: "Operacion cancelada: Producto inexistente",
      change: cash,
    };
  }
  if (userMoney < chosenProduct.price) {
    return {
      message: "Operacion cancelada: Dinero insuficiente",
      change: cash,
    };
  }

  let result = userMoney - chosenProduct.price;
  for (let value of coins) {
    while (result >= value) {
      result -= value;
      change.push(value);
    }
  }
  let correctPurchase = {
    product: chosenProduct.name,
    change: change,
  };
  return correctPurchase;
};
vendingMachine([100, 100], 9)
vendingMachine([600], 1)
vendingMachine([200], 1)
vendingMachine([10], 4)

module.exports = vendingMachine