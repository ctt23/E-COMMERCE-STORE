import express from 'express'; // Importing express framework
import dotenv from 'dotenv'; // Importing dotenv to manage environment variables

dotenv.config(); // Loading environment variables from .env file

const app = express(); // Creating an instance of express or creating an express app
const PORT = process.env.PORT || 5000; // Setting the port to the environment variable PORT or 5000

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`); // Starting the server and logging the port
});


