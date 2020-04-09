const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var data = [];


// Server any static files
app.use(express.static(path.join(__dirname, 'build')));

const xlsxFile = require('read-excel-file/node');

xlsxFile('./src/assets/spreedsheets/SampleData.xlsx', { getSheets: true }).then((sheets) => {
  sheets.forEach((obj) => {

    xlsxFile('./src/assets/spreedsheets/SampleData.xlsx', { sheet: obj.name }).then((rows) => {
      rows.forEach(element => {
        if (element[0] != "State Name") {
          data.push(element);
        }
      });

    })
  })
})
app.get('/data', (req, res) => {
  res.send(data);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build',
    'index.html'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));


