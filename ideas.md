Integration with Teamwork API

We can only query companies by ID, so User models should have an associated company ID.

Add a webhook for COMPANY_CREATED that automatically creates a new User model, with the correct fields.

Rework User model to be Company model, since client will be logging in via Company

Log in -> look up company by Name (username), get the teamwork company ID, then query the TeamWork API for data. 

# Dashboard

What should clients see?

Tasks
  - Pending
  - Hours logged on task

Completed Tasks
  - Hours logged on task

Total number of tasks
Total number of hours logged

Outstanding bills?

query wave apps API for invoices 

# New Request

Form to submit a new request

Type: Web Development, Design
Description: request description
