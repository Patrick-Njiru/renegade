# README
# Project

**Project Name**
   
   RENEGADE

**Problem Statement:**

Many developers and managers are having a hectic time to meet the desires of thir employers  which may lead to various consequences.
Some may end up even fired from work yet they have the set of skills needed.

**Solution:**

As  software developers we sat down and decided to help fellow developers to manage their work and time.
This is a project that entails the project-managers and their developers.Its main aim is to organise the managers and their developers to hold a good  state of control of their projects.In addition, its a handy tool for managing ones work.

## Install

### Clone the repository

```shell
git@github.com:Patrick-Njiru/renegade.git
cd renegade
```

### Check your Ruby version

```shell
ruby -v
```

The ouput should start with something like `ruby 3.1.2`

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```shell
rbenv install 3.1.2
```

### Install dependencies

Using [Bundler](https://github.com/bundler/bundler) and [Yarn](https://github.com/yarnpkg/yarn):

```shell
bundle install
```

### Set environment variables

Incase of any issues experienced in installig dependancies.

 contact the involved developers:
 
 **UI(Frontend):**
 
Kevin Irungu,

Stephen Njuguna,

Ronald Kubasu,

**Backend**

Allan Ngugi,

Patrick Njiru

 (sensitive data).

### Initialize the database

```shell
rails db:create db:migrate db:seed
```

### Opening the frontend server.

cd client folder run 
```shell
npm start
```

## Server backend

```shell
rails s
```

## Deliverables

**Home Page**

![Home page](https://user-images.githubusercontent.com/105485948/206862748-c93a1bc5-5c07-4c00-bdcd-7f4b1b37e2b2.jpeg)

**A project-manager can login:**

![Project manager login](https://user-images.githubusercontent.com/105485948/206862779-574ab54e-80b1-4e46-891f-d6a1a5490238.jpeg)

**A developer can login (also can signup if they don't have an account):**
 
 ![Login Developer](https://user-images.githubusercontent.com/105485948/206862845-52263cc1-1bec-4e7e-b8b2-203dad7ddf14.jpeg)

## They will be directed to their specific unit of work where they can see as follows:

**Project-Manager:**

1. He/She can see the projects they have and the developers involved, the progress they have with the projects, description, title and lastly the deadline of the project.
2. A project-manager can also create a new project and assign a developer.

![Project-Manager login](https://user-images.githubusercontent.com/105485948/206862894-fd1d4a12-08f6-45e7-8c70-89f87ae34038.jpeg)

Developer:
1. He/Se can see the projects they have.  
2. A developer can update their status with their project and also delete when done.
3. They also have a leeway of their progress and  deadline of the project.

![Developer projects page](https://user-images.githubusercontent.com/105485948/206862915-3fae3297-c0b8-44fb-af40-195b95ed94f1.jpeg)

4. A developer can also see their assigned manager.

![Developer manager page](https://user-images.githubusercontent.com/105485948/206863454-bf6fe759-4186-4980-8954-0dad12649e1b.jpeg)

5. After that they can logout at their pleasure.



**Relationships**

N/B don't copy this its already incorporated in the models code.

Developer:

    has_many :projects
    has_many :project_managers, through: :projects

Project manager:

    has_many  :projects
    has_many  :developers, through: :projects

Project:

    belongs_to :project_manager
    belongs_to :developer
### With Heroku pipeline (recommended)

Push to Heroku staging remote:

```shell
git push heroku-staging
```

Go to the Heroku Dashboard and [promote the app to production](https://devcenter.heroku.com/articles/pipelines) or use Heroku CLI:

```shell
heroku pipelines:promote -a project-staging

```
N/B This project will be deployed to Heroku soon be ware it can't work without opening the servers both client and the backend servers.

### Directly to production (not recommended)

Push to Heroku production remote:

```shell
git push heroku
```

N/B This project will be deployed to Heroku soon be ware it can't work without opening the servers both client and the backend servers.

#### To Be Done.

1. Create a chat box for both developer and manager.
2. Create a meeting schedule for developers and  project-managers (for remote workers).
3. And many more features.

THANKS IN ADVANCE,

ENJOY THE PRODUCT.


