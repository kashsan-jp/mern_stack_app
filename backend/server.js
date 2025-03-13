import express from 'express'
import { postsRoutes } from './routes/postsRoutes.js'
import { usersRoutes } from './routes/usersRoutes.js'
import mongoose from 'mongoose'

const app  = express();
const port = process.env.PORT || 4000

app.use(express.json());

app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);


//mongoose.connect("mongodb://localhost:27017", { dbName: 'demo_db'})
mongoose.connect(process.env.DB_URI, { dbName: 'demo_db'})
    .then(()=>{ 
    console.log("connected to DB successfully");
    //app.listen(port, '0.0.0.0', () => console.log(`Listening to port ${port}`));
    app.listen(port, 'localhost', () => console.log(`Listening to port ${port}`));
})
.catch((err) => console.log(err));




