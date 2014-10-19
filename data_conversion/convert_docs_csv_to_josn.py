import csv
import json

# hack to check the number of rows in the input file
csvfile = open('GPs_Data.csv', 'r')
fieldnames = ("Surname", "Forename", "Initials", "Sex", "Qualifications", "Graduations","Grad Year", "Practicing Year","Specialisms", "Surgery ID", "Surgery Name", "address line 1", "Town", "Post Code", "LA Area", "Telephone", "Fax")
reader = csv.DictReader( csvfile, fieldnames)
rows = list(reader)
totalrows = len(rows)
csvfile.close()
# end of hack

csvfile = open('GPs_Data.csv', 'r')
jsonfile = open('GPs_Data.json', 'w')


fieldnames = ("Surname", "Forename", "Initials", "Sex", "Qualifications", "Graduations","Grad Year", "Practicing Year","Specialisms", "Surgery ID", "Foreign_key", "Surgery Name", "address line 1", "Town", "Post Code", "LA Area", "Telephone", "Fax")
reader = csv.DictReader( csvfile, fieldnames)

jsonfile.write ('{"GPs_in_Aberdeen":[')
for row in reader:
	totalrows -= 1
	print totalrows
	if row > 0:
		json.dump(row, jsonfile)
		if totalrows > 0:
			jsonfile.write (',')
		jsonfile.write('\n')
jsonfile.write (']}')

#tidy up
csvfile.close()
jsonfile.close()