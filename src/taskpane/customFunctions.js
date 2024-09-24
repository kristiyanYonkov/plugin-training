/*
  add border to a range
  params are range
*/
export const addBordersToARange = (range) => {
    //array of strings
    const borderEdges = ["EdgeTop", "EdgeBottom", "EdgeLeft", "EdgeRight", "InsideVertical", "InsideHorizontal"];
    const borders = range.format.borders;
    borderEdges.forEach((edge) => {
      let border = borders.getItem(edge);
      border.style = Excel.BorderLineStyle.continuos;
      border.color = "black";
      border.weight = Excel.BorderWeight.thin;
    })
}

// export const fillLeftDiagonal =(range) => {
//     let rowCount = range.getRowCount();
//     let columnCount = range.getColumnCount();
//     const cellOne = range.getCell(2,2);
//     const cellTwo = range.getCell(2,3);
//     cellOne.values = [[rowCount]];
//     cellTwo.values = [[columnCount]];
//     // for(let row = 0; row < rowCount; row++){
//     //     for(let column = 0; column < columnCount; column++){
//     //         let cellRange = range.getCell(row + 1, column + 1);
//     //         cellRange.setBackgroundColor("#FFDE59")
//     //     }
//     // }
// }
