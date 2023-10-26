import tableData from "./periodicTableData.json";

let symbols = tableData.reduce(function (obj, element) {
  obj[element.symbol] = element;
  return obj;
}, {});

let names = tableData.reduce(function (obj, element) {
  obj[element.name] = element;
  return obj;
}, {});

let numbers = tableData.reduce(function (obj, element) {
  obj[element.atomicNumber] = element;
  return obj;
}, {});

function getInfoBySymbol(symbol) {
  const elementInfo = tableData.find((item) => item.symbol === symbol);

  if (!elementInfo) return {};

  return elementInfo;
}

function getInfoByName(name) {
  const elementInfo = tableData.find((item) => item.name === name);

  if (!elementInfo) return {};

  return elementInfo;
}

function getInfoByNumber(atomicNumber) {
  const elementInfo = tableData.find(
    (item) => item.atomicNumber === atomicNumber
  );

  if (!elementInfo) return {};

  return elementInfo;
}

export {
  tableData,
  symbols,
  names,
  numbers,
  getInfoBySymbol,
  getInfoByName,
  getInfoByNumber,
};
