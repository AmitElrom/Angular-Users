require('./configs/database');
const cors = require('cors')
const express = require('express')
const userRouter = require('./routers/userRouter')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);


app.listen(3112, () => {
    console.log('server is on');
});