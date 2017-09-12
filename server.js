var express    = require("express");
var product = require('./routes/productroutes');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();

//route to handle product operation
router.post('/addProduct',product.addProduct);
router.get('/allProducts',product.allProducts);
router.get('/allProducts/:region',product.productsByRegion);

app.use('/api', router);
app.listen(5001);
