const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require("./routes/route");

app.use(bodyParser.urlencoded({ extended: true }));
router(app);

app.listen(3001,function(e){
    if(e) {
      console.error(e);
    }
    else {
      console.log(`Running server at port 3000`) ;
    }
});
