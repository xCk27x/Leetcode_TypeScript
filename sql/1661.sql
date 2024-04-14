SELECT A1.machine_id, 
      ROUND(AVG(A2.timestamp - A1.timestamp), 3) 
        AS processing_time
FROM Activity A1 INNER JOIN Activity A2 
ON A1.machine_id = A2.machine_id
WHERE A1.activity_type = 'start' 
  AND A2.activity_type = 'end'
GROUP BY machine_id