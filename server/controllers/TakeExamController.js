const TakeExam = require('../models/TakeExam');

exports.fetchEPRList = (req, res, next) => {
  TakeExam.fetchCategory(req.query.id)
    .then((category) => {
      TakeExam.fetchSubCategory(req.query.id)
        .then((subCategory) => {
          res.json({ category, subCategory });
        });
    })
    .catch(next);
};