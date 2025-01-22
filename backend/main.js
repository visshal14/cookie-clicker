const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const { getUser, updateUser } = require('./jobs/userJobs');

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err));

app.get('/api/user', async (req, res) => {
    try {
        const user = await getUser();
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Error fetching user' });
    }
});

app.post('/api/click', async (req, res) => {
    try {
        const updatedUser = await updateUser();
        res.json(updatedUser);
    } catch (error) {
        console.error('Error clicking:', error);
        res.status(500).json({ message: 'Error clicking' });
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));