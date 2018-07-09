const TakeExam = require('../models/TakeExam');

exports.fetchAllExam = (req, res, next) => {
  TakeExam.fetchAllExam()
    .then((examList) => {
      res.json(examList);
    })
    .catch(next);
};

exports.fetchEPRList = (req, res, next) => {
  TakeExam.fetchEPRList(req.query.id)
    .then((EPRList) => {
      res.json(EPRList);
    })
    .catch(next);
};

exports.fetchExamId = (req, res, next) => {
  TakeExam.fetchExamId()
    .then((ExamIdObject) => {
      res.json(ExamIdObject);
    })
    .catch(next);
};

exports.fetchRandomExIdList = (req, res, next) => {
  TakeExam.fetchRandomExIdList(req.query.id)
    .then((List) => {
      res.json(List);
    })
    .catch(next);
};

exports.fetchExamSpecifyId = (req, res, next) => {
  const rawIdList = req.body.idList;
  TakeExam.fetchExamSpecifyId(rawIdList.randomExIdList)
    .then((examList) => {
      res.json(examList);
    })
    .catch(next);
};

exports.updateAnswer = (req, res, next) => {
  const object = req.body;
  console.log(object);
  TakeExam.findUploadedAnswer(object.id, 'existing check')
    .then((isExist) => {
      // if no old answer exist so create it first
      if (!isExist) {
        console.log('CREATE!!!', object.category);
        TakeExam.createBufferAnswer(object.id, object.category, object.answerList, new Date())
          .then((result) => {
            console.log('Create result', result);
          })
          .catch(next);
      }
      // after we make sure it exist update it
      TakeExam.updateAnswer(object.id, object.category, object.answerList)
        .then((result) => {
          if (result === null) res.json('Update Complete');
          else res.json('Something wrong :'.concat(result));
        })
        .catch(next);
    })
    .catch(next);
};

exports.findUploadedCategory = (req, res, next) => {
  const object = req.query;
  TakeExam.findUploadedCategory(object.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(next);
};