const mongoose = require('mongoose');
const config = require('config');
const dburl = config.get('mongoURI');

export const connectDB = async () => {
    try{
        await mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}