import tableData from "./periodicTableData.json";

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

function getInfoByAtomicNumber(atomicNumber) {
  const elementInfo = tableData.find(
    (item) => item.atomicNumber === atomicNumber
  );

  if (!elementInfo) return {};

  return elementInfo;
}

export { tableData, getInfoByName, getInfoBySymbol, getInfoByAtomicNumber };
