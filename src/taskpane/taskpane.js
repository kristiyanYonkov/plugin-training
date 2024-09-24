/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

import { addBordersToARange } from "./customFunctions";

Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    // Assign event handlers and other initialization logic.
    document.getElementById("create-table").onclick = () => tryCatch(createTable);
    document.getElementById("filter-table").onclick = () => tryCatch(filterTable);
    document.getElementById("sort-table").onclick = () => tryCatch(sortTable);
    document.getElementById("create-chart").onclick = () => tryCatch(createChart);
    document.getElementById("freeze-headers").onclick = () => tryCatch(freezeHeaders);
    document.getElementById("unfreeze-headers").onclick = () => tryCatch(unFreezeHeaders);
    document.getElementById("open-dialog").onclick = () => openDialog();
    document.getElementById("fill-cell").onclick = () => tryCatch(fillCell);
    document.getElementById("add-sheets").onclick = () => tryCatch(addSheets);
    document.getElementById("range-cell-value-count").onclick = () => tryCatch(rangeCellValueCount);
    document.getElementById("range-left-diagonal").onclick = () => tryCatch(leftDiagonalOfRange);

    document.getElementById("reset-table").onclick = () => tryCatch(resetTable);
  }
});

let dialog = null;

//get active wookrsheet method
const getActiveWorksheet = (xlxsContext) => {
  return xlxsContext.workbook.worksheets.getActiveWorksheet();
}

const createTable = async () => {
  await Excel.run(async (context) => {
    //get the active worksheet
    const currentWorksheet = getActiveWorksheet(context);
    //add a new table by definig its size in columns
    //important is that the generated table is of type OBJECT
    const expensesTable = currentWorksheet.tables.add("A1:D1", true);// bool param which defines if there are headers or not
    //set the name of the table
    expensesTable.name = "ExpensesTable";

    //getHeaderRowsRange -> gets the header row and the sets the values of each column
    expensesTable.getHeaderRowRange().values =
      [["Date", "Merchant", "Category", "Amount"]];

    expensesTable.rows.add(null, [
      ["1/1/2017", "The Phone Company", "Communications", "120"],
      ["1/2/2017", "Northwind Electric Cars", "Transportation", "142.33"],
      ["1/5/2017", "Best For You Organics Company", "Groceries", "27.9"],
      ["1/10/2017", "Coho Vineyard", "Restaurant", "33"],
      ["1/11/2017", "Bellows College", "Education", "350.1"],
      ["1/15/2017", "Trey Research", "Other", "135"],
      ["1/15/2017", "Best For You Organics Company", "Groceries", "97.88"]
    ]);

    expensesTable.columns.getItemAt(3).getRange().numberFormat = [['\u20AC#,##0.00']];

    //automatically define cells for the columns and the rows
    expensesTable.getRange().format.autofitColumns();
    expensesTable.getRange().format.autofitRows();

    await context.sync();
  });
}

async function filterTable() {
  await Excel.run(async (context) => {
    const currentWorksheet = getActiveWorksheet(context);
    const expensesTable = currentWorksheet.tables.getItem('ExpensesTable');
    const categoryFilter = expensesTable.columns.getItem('Category').filter;
    categoryFilter.applyValuesFilter(['Education', 'Groceries']);

    await context.sync();
  });
}

async function resetTable() {
  await Excel.run(async (context) => {
    const currentWorksheet = getActiveWorksheet(context);
    const expensesTable = currentWorksheet.tables.getItem('ExpensesTable');
    expensesTable.columns.getItem('Category').filter.clear();

    await context.sync();
  });
}

async function sortTable() {
  await Excel.run(async (context) => {
    const currentWorksheet = getActiveWorksheet(context);
    const expensesTable = currentWorksheet.tables.getItem("ExpensesTable");

    const sortFields =
      [
        {
          //get the index of the column we want to sort -> in this case it is "Amount"
          key: 3,
          ascending: false,
        }
      ]
    expensesTable.sort.apply(sortFields);

    await context.sync();
  });
}
debugger
async function createChart() {
  await Excel.run(async (context) => {

    //get the active worksheet
    const currentWorksheet = getActiveWorksheet(context);
    const expensesTable = currentWorksheet.tables.getItem('ExpensesTable');
    const dataRange = expensesTable.getDataBodyRange();

    //add a chart to the active sheet (param1: type of chart, param2: data to be used, param3: eries of data points from the table should be charted row-wise or column-wise. )
    const chart = currentWorksheet.charts.add('ColumnClustered', dataRange, 'Auto');

    //determine the position of the chart (give top left and bottom right cell)
    chart.setPosition("B15", "G30");
    chart.title.text = "Expenses";
    //where the legend will be placed
    chart.legend.position = "Right";
    //colors the background of the given series name cell
    chart.legend.format.fill.setSolidColor("magenta");
    chart.dataLabels.format.font.size = 15;
    chart.dataLabels.format.font.color = "black";
    chart.series.getItemAt(0).name = "Value in \u20AC";

    await context.sync();
  });
}

async function freezeHeaders() {
  await Excel.run(async (context) => {
    //get the current worksheet and freeze the top(first) row
    const currentWorksheet = getActiveWorksheet(context);
    currentWorksheet.freezePanes.freezeRows(1);

    await context.sync();
  })
}

async function unFreezeHeaders() {
  await Excel.run(async (context) => {
    const currentWorksheet = getActiveWorksheet(context);
    currentWorksheet.freezePanes.unfreeze();

    await context.sync();
  })
}

const openDialog = () => {
  Office.context.ui.displayDialogAsync(
    //pass the html dialog view we want to show
    "https://localhost:3000/popup.html",
    { height: 45, width: 55 },

    function (result) {
      dialog = result.value;
      dialog.addEventHandler(Office.EventType.DialogMessageReceived, processMessage);
    }
  )
}

const processMessage = (args) => {
  document.getElementById("user-name").innerHTML = args.message;
  dialog.close();
}

/*
 color fill predifined range and set all borders
*/
const fillCell = async () => {
  await Excel.run(async (context) => {
    const currentWorksheet = getActiveWorksheet(context);
    const range = currentWorksheet.getRange("B2:H8");
    range.set({
      format: {
        fill: {
          color: '#BFD641'
        },
        font: {
          name: "Verdana",
          color: "magenta",
          size: 12,
          bold: true,
        }
      }
    })
    //add outer borders;
    addBordersToARange(range);

    await context.sync();
  })
}

/*
adding sheets to a workbook based on predifined names
*/
const sheetNames = ["TrialOne", "TrialTwo", "TrialThree", "TrialFour", "TrialFive"];
const addSheets = async () => {
  await Excel.run(async (context) => {
    const currentWorkBook = context.workbook.worksheets;
    for (let i = 0; i < sheetNames.length; i++) {
      let sheet = currentWorkBook.add(sheetNames[i]);
      sheet.load("name", "position");
      await context.sync();
    }
  })
}

/*
get the cell count in a predifined range
*/
const rangeCellValueCount = async () => {
  Excel.run(async (context) => {
    const currentWorksheet = getActiveWorksheet(context);
    const range = currentWorksheet.getRange("A1:C3");

    range.load("cellCount");
    await context.sync();
    let rangeCellCount = range.cellCount;

    range.format.horizontalAlignment = "Center",
      range.format.verticalAlignment = "Center",

      range.values =
      [
        ['-', '-', '-'],
        ['-', rangeCellCount, '-'],
        ['-', '-', '-']
      ];
    await context.sync();
  })
}

const leftDiagonalOfRange = async () => {
  Excel.run(async (context) => {
    const currentWorksheet = getActiveWorksheet(context);
    const range = currentWorksheet.getRange("A1:C4");
    // range.format.fill.color = "Red";
    range.load(["values", "rowCount", "columnCount"]);
    await context.sync();

    const rows = range.rowCount;
    const columns = range.columnCount;

    if (rows === columns) {
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          if (row === column) {
            let rowCell = range.getCell(row, column);
            rowCell.load("values");
            await context.sync();
            rowCell.values = [[`${row}--${column}`]];
            rowCell.format.fill.color = "Green";
          }
        }
      }
    } else {
      // merge range and display mesage to the user
      range.merge();
      await context.sync();
    }
    await context.sync();
  })
}

async function tryCatch(callback) {
  try {
    await callback();
  } catch (error) {
    // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
    console.error(error);
  }
}


