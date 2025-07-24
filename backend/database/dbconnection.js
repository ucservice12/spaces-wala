import mongoose from "mongoose";

export const dbconnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGDBOURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Error: ${error.message}`);
        process.exit(1);
    }
};
