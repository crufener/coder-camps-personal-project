import * as express from 'express';
let router = express.Router();

/* GET index page*/
router.get('/', (req, res, next) => {
    res.render('index');
});

export default router;
