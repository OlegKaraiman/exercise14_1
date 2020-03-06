// eslint-disable-next-line no-unused-vars
function createTable() {
    const table = document.createElement('table');
    const sum = 10;
    let numb = 1;
    document.body.append(table);
    for (let i = 0; i < sum; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < sum; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = numb++;
        }
    }
}
