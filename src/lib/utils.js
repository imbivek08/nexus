const mongoose = require('mongoose');

let connection;

export const connectToDB = async () => {
    try {
        if (connection && connection.readyState === 1) {
            console.log("Using the existing connection");
            return;
        }

        const db = await mongoose.connect(process.env.DB_URL);
        connection = db.connection;
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
