const mongoose = require("mongoose")

const connectToDb = async () => {

    mongoose.connect(process.env.CONNECTION_STRING)
        .then((conn)=>{
            console.log(`Connected to DB ${conn.connection.host}`);
        })
        .catch((error) => {
            console.log("error", error);
            process.exit(1)
        })
}

module.exports = connectToDb;