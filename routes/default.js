let router  = require('express').Router();


router.get('/', (req, res) => {
    res.render('default', { title: 'DragonCircle' 
                            });
});


module.exports = router;
