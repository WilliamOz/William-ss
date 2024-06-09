const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/api/appointments', (req, res) => {
    const appointment = req.body;
    let appointments = [];

    // Load existing appointments from a file
    if (fs.existsSync('appointments.json')) {
        const data = fs.readFileSync('appointments.json');
        appointments = JSON.parse(data);
    }

    appointments.push(appointment);

    // Save the updated appointments to a file
    fs.writeFileSync('appointments.json', JSON.stringify(appointments, null, 2));

    res.status(201).send('Appointment scheduled');
});

// Endpoint to get appointments
app.get('/api/appointments', (req, res) => {
    if (fs.existsSync('appointments.json')) {
        const data = fs.readFileSync('appointments.json');
        const appointments = JSON.parse(data);
        res.status(200).json(appointments);
    } else {
        res.status(200).json([]);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
