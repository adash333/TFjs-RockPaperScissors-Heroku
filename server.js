let express = require("express");
let app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static("./static"));

app.listen(app.get('port'), function(){
    console.log("Serving at 8080")
});
