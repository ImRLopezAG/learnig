---
title: How Not to DELETE
editUrl: false
---

* **Explanation:** Avoid using `DELETE` without a `WHERE` clause as it removes all records.
* **Bad Practice:**
  ```sql
  DELETE FROM employees; -- This will delete all records in the employees table
  ```

## See

### [WHERE](/notes/sql/keywords/where)
