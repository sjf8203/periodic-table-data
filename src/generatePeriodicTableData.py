import csv
import json

csv_file = 'PubChemElements_all.csv'
json_file = 'periodicTableData.json'

data = []

with open(csv_file, 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        row = {key[0].lower() + key[1:]: value for key, value in row.items()}

        row["atomicNumber"] = int(row["atomicNumber"])
        row["atomicMass"] = float(row["atomicMass"])
        try:
            row["electronegativity"] = float(row["electronegativity"])
        except ValueError:
            row["electronegativity"] = None
        try:
            row["atomicRadius"] = int(row["atomicRadius"])
        except ValueError:
            row["atomicRadius"] = None
        try:
            row["ionizationEnergy"] = float(row["ionizationEnergy"])
        except ValueError:
            row["ionizationEnergy"] = None
        try:
            row["electronAffinity"] = float(row["electronAffinity"])
        except ValueError:
            row["electronAffinity"] = None
        try:
            row["meltingPoint"] = float(row["meltingPoint"])
        except ValueError:
            row["meltingPoint"] = None
        try:
            row["boilingPoint"] = float(row["boilingPoint"])
        except ValueError:
            row["boilingPoint"] = None
        try:
            row["density"] = float(row["density"])
        except ValueError:
            row["density"] = None
        row["yearDiscovered"] = row["yearDiscovered"]

        data.append(row)

with open(json_file, 'w') as json_file:
    json_file.write(json.dumps(data, indent=4))

print(f'Export JSON OK: {json_file.name}')