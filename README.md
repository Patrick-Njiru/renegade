
# Project Title
RENEGADE: A project management tool to help keep your company's projects well organized

# Project Authors

**Frontend:**

Kevin Irungu

Stephen Njuguna

Ronald Kubasu

**Backend:**

Allan Ngugi

Patrick Njiru

# About the product
Renegade is an intuitive project management tool, designed to optimize the process of project management. It offers authorized project managers the ability to login and create, assign, update and delete projects, and to track progress, as well as view developer's contact information. It also provides authorized developers the ability to log in and view their assigned projects and their respective managers. Furthermore, new developers can join the Renegade pool of developers by signing up. Both a project manager and developer may also log out once done using the application. This is all handled in a user-friendly and efficient manner.

## Set up

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

Incase of any issues experienced in installing dependancies.

 contact the involved developers:
 
 **UI(Frontend):**
 
Kevin Irungu - https://github.com/K-Irungu

Stephen Njuguna - https://github.com/Stephen-Njuguna-Njambi-Moringa

Ronald Kubasu - https://github.com/Ronaldkubasu

**Backend**

Allan Ngugi - https://github.com/Allan-Ngugi

Patrick Njiru - https://github.com/Patrick-Njiru


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

## Deliverables (Including user stories)

**Home Page**

![Home page](https://user-images.githubusercontent.com/105485948/206862748-c93a1bc5-5c07-4c00-bdcd-7f4b1b37e2b2.jpeg)

**A project-manager can login:**

![Project manager login](https://user-images.githubusercontent.com/105485948/206862779-574ab54e-80b1-4e46-891f-d6a1a5490238.jpeg)

**A developer can login (also can signup if they don't have an account):**
 
 ![Login Developer](https://user-images.githubusercontent.com/105485948/206862845-52263cc1-1bec-4e7e-b8b2-203dad7ddf14.jpeg)

## Project Manager View
**Dashboard:**

Here, the manager can view all the information regarding every project in the database.

**My Projects:**

Here, the manager can view all the projects that they are in charge of, edit and update any details regarding a selected project, and delete a selected project.

**My Developers:** 

Here, the manager can view the contact information for every developer that they have collaborated with to facilitate communication.

**Create New Project**

Here, the manager can create a new project and assign it a developer. Having been created by the logged in manager, the project is directly associated with them and can be found under "MY Projects"

![Project-Manager login](https://user-images.githubusercontent.com/105485948/206862894-fd1d4a12-08f6-45e7-8c70-89f87ae34038.jpeg)

## Developer View
**My Projects:**

Here, the developer can view all the projects that they have been assigned.

**My Managers:** 

Here, the developer can view the contact information for every manager that they have collaborated with to facilitate communication.

![Developer projects page](https://user-images.githubusercontent.com/105485948/206862915-3fae3297-c0b8-44fb-af40-195b95ed94f1.jpeg)
![Developer manager page](https://user-images.githubusercontent.com/105485948/206863454-bf6fe759-4186-4980-8954-0dad12649e1b.jpeg)


## Database Relationships

Project_Manager -< Projects >- Developer

## Deployment
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

## Future plans
Create a chat box for both developer and manager.
Create a meeting schedule/calendar for developers and  project-managers (for remote workers).



