const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});

// Routes Path
const { findAllNews, findNewsById, createNews } = require('./routes/news');
const { findAuthorById, findAllAuthors } = require('./routes/author');
const { findNewsByCategory, findAllCategories } = require('./routes/newsCategory');


// News
router.get('/news', findAllNews);
router.get('/news/:id', findNewsById);
router.post('/news', upload.single('image') , createNews);

// Authors
router.get('/author', findAllAuthors);
router.get('/author/:id', findAuthorById);

// Categories
router.get('/news/category/:category', findNewsByCategory)
router.get('/categories', findAllCategories);

module.exports = router;