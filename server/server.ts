import { app } from './app';
require ("dotenv").config();

// create the server
app.listen(process.env.PORT, () => {
    console.log(`Server is connected with the port ${process.env.PORT}`);
})