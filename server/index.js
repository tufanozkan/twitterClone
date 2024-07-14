const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());


const db = require("./models")

const postsRouter = require("./routes/Posts")
app.use("/posts",postsRouter)

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("server is running")
    });
});
