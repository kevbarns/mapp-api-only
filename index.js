require("dotenv").config();
const express = require("express");

const excelToJson = require("convert-excel-to-json");
const readXlsxFile = require("read-excel-file");
const csvToJson = require("csvtojson");
const csv = require("fast-csv");
const cors = require("cors");

const fs = require("fs");

const app = express();
const port = process.env.PORT;

// const services = require("./data/services.csv")
// const services = require("./data/test-data.csv")
// const fileStream = fs.createReadStream(services)
// const fileStream = fs.createReadStream("./data/services.csv")
// const parser = csv.parse()
const data = require("./data/data.json");

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONT],
  })
);

app.get("/catalogue-services", (req, res) => {
  res.json(data);
  // fileStream
  //     .pipe(parser)
  //     .on('error', error => {
  //         reject(err)
  //         console.error(error)
  //     })
  //     .on('data', data => {
  //         console.log(data);
  //         return

  //         const fileLine = {}
  //         Object.keys(modelProvider.fields).forEach(fieldKey => {
  //             const fieldValues = Object.values(modelProvider.fields[fieldKey] || {}) || []
  //             fieldValues.some(fieldValue => {
  //                 if (typeof fieldValue === 'undefined') return false
  //                 let value = data[fieldValue]
  //                 if (typeof value === 'string') value = cleanCSVField(value)
  //                 fileLine[fieldKey] = value
  //                 // early-exit loop if we found something in this iteration
  //                 return value
  //             })
  //         })
  //         .on('end', () => {
  //             console.log("CSV file treated successfully");

  //         })

  // csvToJson().fromFile(services).then((data) => {
  //     console.log("DATA", data);
  //     // res.json(data)
  // }).catch(err => console.log(err))
});
// })

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
