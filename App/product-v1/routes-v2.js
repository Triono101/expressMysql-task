const router = require('express').Router();
const moment = require('moment');
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const productController = require('./controler-v2');

// First Page
router.get('/', (req,res) => {
    res.json({
        Status: `Succesfully added at ${moment().format('LTS')}`,
        Message: 'Selamat datang di halaman express-mySQL',
        Navigation: '/api/v1/product',
        Information: '/api/v2/product'
    });
});

// Get all Data
router.get('/product', productController.index );

// Get Data by Id
router.get('/product/:id', productController.view);

// Insert Data
router.post('/product/', upload.single('image'), productController.store);

// Update Data
router.put('/product/:id', upload.single('image'), productController.update);

// Delete Data
router.delete('/product/:id', upload.single('image'), productController.destroy);

module.exports = router;