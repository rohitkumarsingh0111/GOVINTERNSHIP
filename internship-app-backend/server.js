
// server.js
const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/admin", adminRouter);

app.post('/api/recommendations', (req, res) => {
    const userSkills = req.body.skills;

    const pythonProcess = spawn('python', ['recommender.py', userSkills]);

    let dataToSend = '';
    pythonProcess.stdout.on('data', (data) => {
        dataToSend += data.toString();
    });

    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            console.error(`Python process exited with code ${code}`);
            return res.status(500).send('Error generating recommendations.');
        }
        try {
            const recommendations = JSON.parse(dataToSend);
            res.json(recommendations);
        } catch (e) {
            res.status(500).send('Error parsing recommendations.');
        }
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});