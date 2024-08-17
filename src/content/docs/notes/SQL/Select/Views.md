---
title: Views
editUrl: false
---

* **Explanation:** A view is a virtual table based on the result set of a SQL query.
* **Syntax:**
  ```sql
  CREATE VIEW view_name AS
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition;
  ```
* **Example:**
  ```sql
  CREATE VIEW Sales_Employees AS
  SELECT first_name, last_name
  FROM employees
  WHERE department = 'Sales';
  ```
* **Use Cases:** Simplifying complex queries, security (restricting access to specific data).

## See

### [Use of Views and Materialized Views](/notes/sql/performance/use-of-views-and-materialized-views)
