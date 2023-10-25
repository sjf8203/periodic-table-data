# Periodic Table Data 
JSON containing information about periodic table data with JavaScript

## Usage
import the package：
``` javascript
import * as elements from 'periodic-table-data';
```
(1) get all data:
``` javascript
console.log(elements.tableData);
output:
[
    {
        "atomicNumber": 1,
        "symbol": "H",
        "name": "Hydrogen",
        "atomicMass": 1.008,
        "cPKHexColor": "FFFFFF",
        "electronConfiguration": "1s1",
        "electronegativity": 2.2,
        "atomicRadius": 120,
        "ionizationEnergy": 13.598,
        "electronAffinity": 0.754,
        "oxidationStates": "+1, -1",
        "standardState": "Gas",
        "meltingPoint": 13.81,
        "boilingPoint": 20.28,
        "density": 8.988e-05,
        "groupBlock": "Nonmetal",
        "yearDiscovered": "1766"
    },
  ...
]
```
(2) get info by element's symbol: 
``` javascript
const DsInfo = elements.getInfoBySymbol('Ds');
console.log(DsInfo);
output:
{
    "atomicNumber": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "atomicMass": 282.166,
    "cPKHexColor": "",
    "electronConfiguration": "[Rn]7s2 5f14 6d8 (predicted)",
    "electronegativity": null,
    "atomicRadius": null,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": "8, 6, 4, 2, 0",
    "standardState": "Expected to be a Solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "groupBlock": "Transition metal",
    "yearDiscovered": "1994"
}
```

(3) or get info by element's name: 
``` javascript
const infoByName = elements.getInfoByName('Darmstadtium');
console.log(infoByName);
```

(4) or get info by atomic number: 
``` javascript
const infoByNumber2 = elements.getInfoByAtomicNumber(2);
console.log(infoByNumber2);
```
## Data
The data for this package comes from [PubChem](https://pubchem.ncbi.nlm.nih.gov/periodic-table/) and was retrieved on Sep 25th, 2023. The "CSV File" for all elements can be found in `PubChemElements_all.csv`. The script `generatePeriodicTableData.py` can be used to regenerate the `periodicTableData.json` file which contains the periodic table data. Make sure you have a Python environment and the csv and json modules installed before running `generatePeriodicTableData.py`.

## License
This software is released under the MIT license