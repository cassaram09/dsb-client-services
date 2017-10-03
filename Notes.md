# Notes

## Structure
  - Rails backend with a React front end
  - Postgres DB
  - Deployed to Heroku

  - App will support CRUD of companies, projects, and tasks through the web interface but will also support CRUD actions via Teamwork webhooks. The app needs to be structured in such a way that we can continue to use it without Teamwork, in the event we move away from Teamwork.

## Authentication
  - JWT auth, with Bcrypt server side

## Views
  - App
    - Login
    - Home
      - Company List
      - Individual Company
        - Projects
          - active projects
        - Tasks
          - active tasks
        - Billing
          - open invoices
    - Account
      - reset password
    - New Task
      - new task form
        - task name
        - description
        - assigned_to


## Models
  - User
    - email
    - name
    - password
    - companies
    - role enum [:employee, :client, :admin]

  - Company
    - name
    - website
    - phone_number
    - balance
    - tasks
    - task lists
    - projects
    - users

  - Project
    - name
    - company
    - hours_logged
    - has many Tasks

  - Task
    - name
    - description
    - complete bool
    - priority enum [:low, :med, :high]
    - due_date 
    - hours_logged
    - assigned_to
    - assigned_by
    - request_type enum [:development, :design, :marketing, :seo, :other]
    - task_type enum [:support, project]

  - Invoice
    - Amount
    - Hours
    - Status enum [:paid, unpaid]

## Features

  User::Client
  - should be able to login using email address
  - should be able to log out
  - should be able to see all companies that user belongs to
  - should be able to see tasks for a project
  - should be able to see general support tasks
  - should be able to see details for a task
  - should be able to edit a task that user created
  - should be able to edit other tasks as an Client Admin
  - should be able to delete a task that user created
  - should be able to create a new task and assign it to an employee
  - should be able to reset password 

  - should NOT be able to view companies user does not belong to
  - should NOT be able to see projects belonging to other companies
  - should NOT be able to see tasks belonging to other companies
  - should NOT be able to modify other users tasks that belong to that company


  User::Employee
  - should be able to view, add, and edit companies
  - should be able to view, add, and edit delete own tasks

  - should NOT be able to edit or delete client tasks

  User::Admin
  - can create / edit / delete Clients and Employees
  - can create / edit/ delete projects
  - can create / edit / delete tasks

## Integrations

  Teamwork Projects
  - webhooks
    - on company CUD, POST companies
    - on project CUD, POST projects
    - on task CUD, POST tasks

  Wave Apps
  - not available yet (closed Alpha)


# Phase 1 - core functionality
  - Authentication - log in / out
  - Secure app over HTTPS
  - User can view companies
  - User can view tasks [ hours, active/complete ]
  - Basic user authorization via pundit?


# Phase 2
  - User can create tasks

# Phase 3


# Authorization / Error handling

We need to account for when a user tries to access a resource that doesn't exist or they don't have permission to view.

