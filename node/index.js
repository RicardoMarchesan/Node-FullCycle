const express = require('express')
const peopleService = require('./services/PeopleService');
const app = express()

app.get('/', (req, res) => {
    peopleService.insertNew()
    peopleService.getAll((listOfNames) => {
        const tableRows = listOfNames.map(
            (person) => `
                <tr>
                    <td>${person.name}</td>
                </tr>
                `
        ).join('');

        const table = `
            <table>
                <tr>
                    <th>Nome</th>
                </tr>${tableRows}
            </table>`;

        res.send(`
            <h1>Full Cycle Rocks!</h1>
            ${table}
        `);
    });
});

app.listen(3000, () => {
    console.log('Running on port 3000')
})