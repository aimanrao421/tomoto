import mongoose from "mongoose";
import dns from "dns";

// Use public DNS servers to resolve Atlas SRV records if local DNS is blocking SRV lookups.
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "foodDelivery"
        });
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection failed:', error);
        process.exit(1);
    }
};