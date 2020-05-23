const parse = require("csv-parse");
const fs = require("fs");

function getServices(path) {
  return new Promise((resolve, reject) => {
    let data = [];
    fs.createReadStream(path)
      .pipe(parse({ delimiter: ",", columns: true }))
      .on("data", row => {
        data.push(row);
      })
      .on("end", () => {
        console.log("CSV PARSING SUCCESS");
        // console.log(data);
        resolve({ service: data });
      })
      .on("error", error => {
        console.log("ERROR WHILE PARSING CSV", error);
        reject(error);
      });
  });
}

module.exports = { getServices };
