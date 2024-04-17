import { Mongoose } from "mongoose";

export const dbConnection = async () => {

    try {
        Mongoose.connect(process.env.MONGO_URI)
        const connection = Mongoose.connection

        connection.on('connected', () => {
            console.log('Connected to database');
        })
        connection.on('error', () => {
            console.log('Error in connecting to database');
        })
    } catch (error) {
        console.log('Error in connecting to database');
        console.log(error);
    }
}