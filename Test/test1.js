const listofstudent = {
    "ten": [
        {"class": "classA", "name": "Mg Mg", "age": "23"},
        {"class": "classA", "name": "Aung Aung", "age": "23"},
        {"class": "classB", "name": "Hla Hla", "age": "23"},
        {"class": "classB", "name": "Ba Nyar", "age": "23"},
        {"class": "classC", "name": "Min Ko Ko Thein", "age": "23"},
        {"class": "classC", "name": "Tin May", "age": "23"},
        {"class": "classD", "name": "Min Ko Ko Thein", "age": "23"},
        {"class": "classD", "name": "Tin May", "age": "23"}
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    // Initial table creation
    createTable(document.getElementById('grade10Table'), listofstudent.ten);
});

function createTable(container, data) {
    const table = document.createElement('table');
    table.classList.add('student-table');
    container.appendChild(table);

    const headers = ['Class', 'Name', 'Age'];
    const headerRow = table.insertRow();

    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        const headerCell = document.createElement('th');
        headerCell.innerHTML = header;
        headerRow.appendChild(headerCell);
    }

    data.forEach(function (student) {
        const row = table.insertRow();
        ['class', 'name', 'age'].forEach(function (key) {
            const cell = row.insertCell();
            cell.innerHTML = student[key] || '-';
        });

        row.cells[1].addEventListener('click', function () {
            createSelectedStudentTable(document.getElementById('selectedStudentTable'), student);
        });
    });
}

function createSelectedStudentTable(container, student) {
    container.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('student-table');
    container.appendChild(table);

    const headers = ['Class', 'Name', 'Age'];
    const headerRow = table.insertRow();

    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        const headerCell = document.createElement('th');
        headerCell.innerHTML = header;
        headerRow.appendChild(headerCell);
    }

    const row = table.insertRow();
    ['class', 'name', 'age'].forEach(function (key) {
        const cell = row.insertCell();
        cell.innerHTML = student[key] || '-';
    });
}

function searchStudent() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchInput !== '') {
        const filteredStudents = listofstudent.ten.filter(student => student.name.toLowerCase().includes(searchInput));

        if (filteredStudents.length > 0) {
            // Show the search result in a new table
            createTable(document.getElementById('grade10Table'), filteredStudents);
        } else {
            // Display a message if the searched name is not found
            document.getElementById('grade10Table').innerHTML = '<p>Sorry, the name you searched is not in the list.</p>';
        }
    }
}

function refreshTable() {
    // Clear the search result and selected student tables
    document.getElementById('grade10Table').innerHTML = '';
    document.getElementById('selectedStudentTable').innerHTML = '';

    // Show only the original table
    createTable(document.getElementById('grade10Table'), listofstudent.ten);
}
