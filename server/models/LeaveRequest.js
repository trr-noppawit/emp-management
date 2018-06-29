const db = require('../db');
const moment = require('moment');

const LeaveRequest = {};

LeaveRequest.create = (leaveRequest, id) => (
  db.one(
    'INSERT INTO leave_requests (user_id, leave_from, leave_to, leave_date, leave_type, purpose, code, totalhours, start_time, end_time, created_user, updated_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING 1',
    [
      id,
      leaveRequest.leaveFrom,
      leaveRequest.leaveTo,
      leaveRequest.leaveDate,
      leaveRequest.leaveType,
      leaveRequest.purpose,
      leaveRequest.code,
      leaveRequest.totalhours,
      leaveRequest.startTime,
      leaveRequest.endTime,
      id,
      id
    ]
  )
);

LeaveRequest.update = (leaveRequest, id) => (
  db.none(
    'UPDATE leave_requests SET status = $1, updated_user = $2, updated_date = $3 WHERE leave_from = $4 AND leave_to = $5 AND user_id = $6',
    [
      leaveRequest.status,
      id,
      moment().format('YYYY-MM-DD HH:mm:ss'),
      leaveRequest.leaveFrom,
      leaveRequest.leaveTo,
      leaveRequest.userId
    ]
  )
);

LeaveRequest.findByUserId = userId => (
  db.manyOrNone('SELECT DISTINCT (leave_from), (leave_to), user_id, purpose, leave_type, code, status FROM leave_requests WHERE user_id = $1 AND status != $2', [userId, 'Cancel'])
);

LeaveRequest.findAll = () => (
  db.manyOrNone('SELECT DISTINCT (leave_from), (leave_to), user_id, purpose, leave_type, code, status FROM leave_requests WHERE status = $1', ['Pending'])
);

LeaveRequest.findByLeave = (leaveFrom, leaveTo, userId) => (
  db.manyOrNone('SELECT * FROM leave_requests WHERE leave_from = $1 AND leave_to = $2 AND user_id = $3', [leaveFrom, leaveTo, userId])
);

LeaveRequest.findByYearAndMonth = (year, month, userId) => (
  db.manyOrNone('SELECT * FROM leave_requests WHERE extract(year from leave_date) = $1 AND extract(month from leave_date) = $2 AND user_id = $3 AND (status = $4 OR status = $5)', [year, month, userId, 'Approve', 'Pending'])
);

LeaveRequest.findSummaryLeave = year => (
  db.manyOrNone(`SELECT users.id, CONCAT(employee_info.first_name, ' ', employee_info.last_name) as name, 
  leave_requests.leave_type, EXTRACT(month from leave_date) as month, SUM(totalhours) / $1 as days
  FROM users INNER JOIN employee_info ON users.id = employee_info.user_id 
  LEFT OUTER JOIN leave_requests ON employee_info.user_id = leave_requests.user_id 
  AND EXTRACT(year from leave_requests.leave_date) = $2
  GROUP BY users.id, leave_requests.leave_type, month, name
  ORDER BY users.id, leave_requests.leave_type, month`, [8, year])
);

module.exports = LeaveRequest;
