const db = require('../db/');

const Performance = {};

Performance.checkExist = (id) => (
  db.manyOrNone("SELECT extract(year from created_date) as year FROM Performance WHERE user_id=$1 ORDER BY created_date DESC",[id])
)

Performance.findById = (id) => (
  db.manyOrNone("SELECT * FROM Performance WHERE user_id=$1 ORDER BY performance_id DESC",[id])
)

Performance.insertPerformance = (performanceInfo,id) =>(
  db.one("INSERT INTO Performance (user_id,score,expected_score,sup_comment,em_sign_date,sup_sign_date,md_sign_date,created_user,updated_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING 1",
  [
    performanceInfo.employeeID,
    performanceInfo.score,
    performanceInfo.expectedScore,
    performanceInfo.supervisorComment,
    null,
    null,
    null,
    id,
    id
  ])
)

Performance.updatePerformance = (performanceInfo,id) =>(
  db.none(
    "UPDATE Performance SET score=$1, expected_score=$2, sup_comment=$3, em_sign_date=$4, sup_sign_date=$5, md_sign_date=$6, updated_user=$7 WHERE user_id=$7",
    [
      performanceInfo.score,
      performanceInfo.expectedScore,
      performanceInfo.supervisorComment,
      performanceInfo.employeeSignDate,
      performanceInfo.supervisorSignDate,
      performanceInfo.MDSignDate,
      performanceInfo.employeeID,
      id
    ])
)
module.exports = Performance;
