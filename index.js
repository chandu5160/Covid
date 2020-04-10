const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
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

var indiaCovidData = {
  predictionData: [],
  latestData: [],
  actualDateWiseData: [],
  hospitalTestData: [],
  stateWiseData: [],
  indiaData: []
}

indiaCovidData.predictionData = xlsxFile('./src/assets/spreedsheets/India_Prediction.xlsx').then((rows) => {
  return rows;
});
xlsxFile('./src/assets/spreedsheets/India_Latest.xlsx').then((rows) => {
  indiaCovidData.latestData.push(rows);
});
xlsxFile('./src/assets/spreedsheets/Inida_Actuals_Daywise.xlsx').then((rows) => {
  indiaCovidData.actualDateWiseData.push(rows);
});
xlsxFile('./src/assets/spreedsheets/India _hospital_testing_data.xlsx').then((rows) => {
  indiaCovidData.hospitalTestData.push(rows);
});
xlsxFile('./src/assets/spreedsheets/State_Wise_Actuals.xlsx').then((rows) => {
  indiaCovidData.stateWiseData.push(rows);
});
xlsxFile('./src/assets/spreedsheets/India.xlsx').then((rows) => {
  indiaCovidData.indiaData.push(rows);
});


app.get('/india-data', (req, res) => {
 
  console.log(indiaCovidData);

});







app.get('/data', (req, res) => {
  res.send(data);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build',
    'index.html'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));


