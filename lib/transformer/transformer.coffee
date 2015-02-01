# @author taosun
# @date 28 Dec 2014

path = require "path"
fs = require "fs"
xlsx = require "xlsx"
dust = require "dustjs-linkedin"
jpp = require "json-path-processor"
pd = (require "pretty-data").pd

SCHEMA_FILENAME = "schema.json"
SHEET_NAME = "PayPal"

# Load all schema and templates at one time
schemas = {}
for filename in fs.readdirSync(path.join __dirname, "schema")
    region = filename.replace /\.json$/, ''
    schemas[region] = JSON.parse (fs.readFileSync(path.join __dirname, "schema", filename))
templates = {}
for filename in fs.readdirSync(path.join __dirname, "templates")
    region = filename.replace /\.dust$/, ''
    templates[region] = (fs.readFileSync(path.join __dirname, "templates", filename)).toString()

# Excel related functions
loadExcelRecords = (excelFilename) ->
    records = {}
    sheet = (xlsx.readFile excelFilename).Sheets[SHEET_NAME]
    for key, value of sheet
        cell = xlsx.utils.decode_cell key
        # TODO deal with this magic number 1
        if typeof cell.r is "number" and cell.r > 1 and typeof cell.c is "number"
            (jpp records).set cell.r + "." + cell.c, value.v, true
    return records

parseExcelRecords = (records, region) ->
    accounts = []
    schema = schemas[region]
    for row, columns of records
        account = {}
        for element in schema
            column = element.column
            jsonPath = element.jsonPath
            data = columns[column]
            (jpp account).set jsonPath, data, true if jsonPath? and jsonPath isnt ""
        accounts.push account
    return accounts

renderXml = (accounts, region, done) ->
    throw new Error if not accounts?
    template = templates[region]
    for account in accounts
      dust.renderSource template, account, (error, output) ->
          if error?
              throw new Error
          else
              done (pd.xml output)

transform = (excelFilename, region, done) ->
    accounts = parseExcelRecords (loadExcelRecords excelFilename), region
    console.log pd.json accounts
    renderXml accounts, region, done

transform path.join(__dirname, "test.xlsx"), "us", console.log
module.exports =
    "transform": transform
