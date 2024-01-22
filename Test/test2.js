const jsonData = [
    { "name": "John Doe", "age": 25, "city": "New York" },
    { "name": "Jane Doe", "age": 30, "city": "Los Angeles" },
    { "name": "Bob Smith", "age": 28, "city": "Chicago" },
    { "name": "John Doe", "age": 25, "city": "New York" },
    { "name": "Jane Doe", "age": 30, "city": "Los Angeles" },
    { "name": "Bob Smith", "age": 28, "city": "Chicago" }
];

// function createTable(container, data) {
//      const table = document.createElement('table');
//      container.appendChild(table);

//      data.forEach(rowData => {
//          const row = table.insertRow();
//         for (const key in rowData) {
//              const cell = row.insertCell();
//              cell.textContent = rowData[key];
//          }
//      });
//  }

// Create table
// const tableContainer = document.getElementById('table-container');
// createTable(tableContainer, jsonData);
 function createTable(dataArray) {
    const table = document.createElement('table');
    document.body.appendChild(table);

     dataArray.forEach(rowData => {
         const row = table.insertRow();
         for (const key in rowData) {
             const cell = row.insertCell();
                cell.textContent = rowData[key];
         }
     });
 }
    document.getElementById('table-container');
    createTable(jsonData);
// function createTable (container,data){
//     const table =document.createElement('table');
//     container.appendChild(table);
    
//     data.forEach(rowData =>
//         {
//             const row = table.insertRow();
//         for (const key in rowData){
//             const cell = row.insertCell();
//             cell.innerHTML = rowData[key];
//         }
//         });
// }
// const tablecontainer = document.getElementById('table-container');
// createTable(tablecontainer,jsonData);