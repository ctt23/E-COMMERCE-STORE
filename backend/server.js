import express from 'express'; // Importing express framework
import dotenv from 'dotenv'; // Importing dotenv to manage environment variables

dotenv.config(); // Loading environment variables from .env file

const app = express(); // Creating an instance of express

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('API is running...'); // Basic route to test if the server is running
});

const PORT = process.env.PORT || 5000; // Setting the port from environment variables or default to 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`); // Starting the server and logging the mode and port
});
