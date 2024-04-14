SELECT es.name, eu.unique_id 
FROM Employees es 
LEFT JOIN EmployeeUNI eu 
ON es.id = eu.id