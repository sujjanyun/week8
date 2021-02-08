const express = require('express'),
    router = express.Router(),
    surveyModel = require('../models/surveyModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
    const classInfoData = await surveyModel.getAllTopicData();
    console.log("Class info", classInfoData);

    return res.render('template', {
        locals: {
            title: 'Class Survey',
            classInfoData
        },
        partials: {
            body: 'partials/home',
        },
    });
});

router.post('/', async function (req, res) {
    const { topic_ranking_id } = req.body;
    const response = await surveyModel.update('HTML', topic_ranking_id);
    if (response.rowCount >= 1) {
        res.redirect('/');
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;