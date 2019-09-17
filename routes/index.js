const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.render('index');
    } catch (err) {
        console.log(err);
    }
});

// 제품
router.get('/product', async (req, res, next) => {
    try {
        res.render('product');
    } catch (err) {
        console.log(err);
    }
});


// 회사소개
router.get('/company', async (req, res, next) => {
    try {
        res.render('company');
    } catch (err) {
        console.log(err);
    }
});

// 연락하기
router.get('/contact', async (req, res, next) => {
    try {
        res.render('contact');
    } catch (err) {
        console.log(err);
    }
});

// 파트너
router.get('/partnership', async (req, res, next) => {
    try {
        res.render('partnership');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;