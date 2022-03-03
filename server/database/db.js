import mongoose  from 'mongoose';

const Connection = async (username = 'crud', password = 'crud') => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.pum05.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;