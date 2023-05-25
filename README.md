
# Project Title
RENEGADE: A project management tool to help keep your company's projects well organized

# Project Authors
**Scrum Master**

- Patrick Njiru - https://github.com/Patrick-Njiru

**Frontend:**

- Kevin Irungu - https://github.com/K-Irungu

- Stephen Njuguna -  https://github.com/Stephen-Njuguna-Njambi-Moringa

- Ronald Kubasu - https://github.com/Ronaldkubasu

- Patrick Njiru

**Backend:**

- Allan Ngugi - https://github.com/Allan-Ngugi

- Patrick Njiru



# About the product
Renegade is an intuitive project management tool, designed to optimize the process of project management. It offers authorized project managers the ability to login and create, assign, update and delete projects, and to track progress, as well as view developer's contact information. It also provides authorized developers the ability to log in and view their assigned projects and their respective managers. Furthermore, new developers can join the Renegade pool of developers by signing up. Both a project manager and developer may also log out once done using the application. This is all handled in a user-friendly and efficient manner.

# Set Up

### Setting up the backend

Start by cloning the repository:

```shell
$ git clone git@github.com:Patrick-Njiru/renegade.git
```
Check your Ruby version:

```shell
$ ruby -v
```
The ouput should start with something like `ruby 3.1.2`. If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```shell
$ rbenv install 3.1.2
```

You should also have the latest version of bundler and rails. 

```shell
$ gem install bundler
$ gem install rails
```

Then install dependencies.

```shell
$ bundle install
```

Initialize the database.

```shell
$ rails db:create db:migrate db:seed
```

When ready to start running the backend server, run:

```shell
$ rails s
```
### Setting up the frontend

```shell
$ cd client
$ npm install
$ npm install @mui/material @emotion/react @emotion/styled 
```

When ready to start running the frontend server, run:

```shell
$ npm start
```

# User stories
**A project manager can:**
- Login and stay logged in
- View the information regarding ALL the projects within the database (Dashboard)
- View all the projects that they are in charge of, edit and update any details regarding a selected project, and delete a selected project (My Projetcts)
- View the contact information for every developer that they have collaborated with (My Developers)
- Create a new project and assign it a developer. Having been created by the logged in manager, the project is immediately added to My projects. (Create Project)
- Logout

**A developer can:**
- Login and stay logged in
- View all the projects that they have been assigned (My Projects)
- View the contact information for every manager that they have collaborated with (My Managers)
- Logout

## Home Page

![Home page](https://user-images.githubusercontent.com/105485948/206862748-c93a1bc5-5c07-4c00-bdcd-7f4b1b37e2b2.jpeg)

## Project manager login form

![Project manager login](https://user-images.githubusercontent.com/105485948/206862779-574ab54e-80b1-4e46-891f-d6a1a5490238.jpeg)

## Developer login form
 
 ![Login Developer](https://user-images.githubusercontent.com/105485948/206862845-52263cc1-1bec-4e7e-b8b2-203dad7ddf14.jpeg)

## Project Manager View

![Project-Manager login](https://user-images.githubusercontent.com/105485948/206862894-fd1d4a12-08f6-45e7-8c70-89f87ae34038.jpeg)

## Developer View

**My Projects** 

![Developer projects page](https://user-images.githubusercontent.com/105485948/206862915-3fae3297-c0b8-44fb-af40-195b95ed94f1.jpeg)

**My Managers**

![Developer manager page](https://user-images.githubusercontent.com/105485948/206863454-bf6fe759-4186-4980-8954-0dad12649e1b.jpeg)

## Live Page
This system requires a database running on the background

## Database Relationships

Project_Manager -< Projects >- Developer

## Future plans
- Incorporate search bar and notifications functionality.

- Create a chat box for both developer and manager.

- Create a meeting schedule/calendar for developers and  project-managers (for remote workers).

## License and Copyright

MIT License

Copyright (c) 2022 Group_3(Moringa)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

