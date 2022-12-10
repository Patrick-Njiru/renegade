# README

<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
3.1.2
* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
# Project

**Project Name**
   RENEGADE

**Problem Statement**
Many developers and managers are having a hectic time to meet the desires of thir employers  which may lead to various consequences.
Some may end up even fired from work yet they have the set of skills needed.

**Solution**
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

The ouput should start with something like `ruby 2.5.1`

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```shell
rbenv install 3.1.2
```

### Install dependencies

Using [Bundler](https://github.com/bundler/bundler) and [Yarn](https://github.com/yarnpkg/yarn):

```shell
bundle && yarn install
```

### Set environment variables

Using [Figaro](https://github.com/laserlemon/figaro):

See [config/application.yml.sample](https://github.com/juliendargelos/project/blob/master/config/application.yml.sample) and contact the developer: [contact@juliendargelos.com](mailto:contact@juliendargelos.com) (sensitive data).

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

A project-manager & developer(also can signup if they don't have an account) can login,be directed to their specific unit of work where they can see as follows:

Project-Manager:
1. He/She can see the projects they have and the developers involved, the progress they have with the projects, description, title and lastly the deadline of the project.

Developer:
1. He/Se can see the projects they ahve and their asigned managers and email.
2. A developer can update their status with their project and also delete when done.
3. They also have a leeway of their progress and  deadline of the project.
4. After that they can logout at their pleasure.

**Relationships**
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

THANKS IN ADVACE.
### Directly to production (not recommended)

Push to Heroku production remote:

```shell
git push heroku
```
N/B This project will be deployed to Heroku soon be ware it can't work without opening the servers both client and the backend servers.
THANKS IN ADVACE.

ENJOY THE PRODUCT.


