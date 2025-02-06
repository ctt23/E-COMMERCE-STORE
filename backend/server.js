import express from 'express'; // Importing express framework
import dotenv from 'dotenv'; // Importing dotenv to manage environment variables

dotenv.config(); // Loading environment variables from .env file

const app = express(); // Creating an instance of express or creating an express app

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('API is running...'); // Basic route to test if the server is running
});

console.log(process.env.PORT); // Logging the environment variable PORT


app.listen(5000, () => {
  console.log(`Server running on port 5000`); // Starting the server and logging the mode and port
});
