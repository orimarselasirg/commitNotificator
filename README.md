
# Commits Notificator App

Commits Notificator App is a web application that queries the commit history of this particular project. It not only displays the commit history of this repository but also of the repository associated with its backend repository.





## Requirements

This project works with Node.js version >= 18. To validate the version and check if you have Node.js installed, you can use the following command in your preferred console:

```
node -v
```

If you don't have Node.js installed or your version is less than 18, I recommend installing it by clicking here. [node]
(https://nodejs.org/)

If you prefer to use Yarn as your package manager, you can check if it's installed by running the following command in your preferred console:
```
yarn -v
```

If you don't have it, you can download it here. [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## Installation

This project can be installed using npm or yarn.

In your command console, you can use the following lines of code:

via npm
```bash
npm install
```
via yarn
```bash
yarn
```



## Environment Variables

To run this project, you should create a .env file in the project's root folder and add the following environment variables:

`VITE_BASE_URL_API`

Please request the value of this variable at the following email address: ramirogrisales@gmail.com

`VITE_REPO_OWNER`

Here you should enter the owner of the GitHub repository.

`VITE_BACKEND_DEFAULT_REPO`

Here you should enter the default name of the repository to be queried for the backend.

`VITE_FRONTEND_DEFAULT_REPO` 

Here you should enter the default name of the repository to be queried for the frontend.

Likewise, an email with all these values will be sent to the project evaluator.



## Running the Project

To start the project in development, you should run the following code in your command console:

using npm
```bash
npm run dev
```

using yarn
```bash
yarn dev
```

The project will start shortly, and the console will provide the localhost address and port defined by the framework.

![image](https://github.com/orimarselasirg/commitNotificator/assets/84402210/1d65a087-f552-4c5a-8471-990303efabc8)

Clicking on the given localhost address will open the app's initial screen in your default web browser

![image](https://github.com/orimarselasirg/commitNotificator/assets/84402210/60b83853-75a0-4efa-91aa-b5d455c4a9f8)

## Features

- Repository Selection
- Viewing Committer Information
- Mobile-Responsive Design
- Direct Access to URL for Commit Details


## Usage/Examples

Repository Selection

![image](https://github.com/orimarselasirg/commitNotificator/assets/84402210/9542e10e-52df-445e-bdd0-4327478e4856)

Commit Author Information

![image](https://github.com/orimarselasirg/commitNotificator/assets/84402210/5ca25621-245e-4c5f-8255-78326a26becb)

## FAQ

#### Can I check my own repositories?

Yes, as long as you set your GitHub username as the value of the 
```
VITE_REPO_OWNER
```
environment variable, and you are the owner of the created repositories.

#### Can I view commit author information?

Yes, you can see user data, including the user's name, avatar, and email who made the commit.

#### Can I edit repository data?

No, this app is only for querying commit history.

#### Can I select repositories from organizations created on my GitHub?

No, you can only query repositories that are not associated with an organization.

#### Can I query commits from other repository managers like Bitbucket?

No, this app consumes the GitHub API, so you can only query commit data from GitHub repositories.

## Authors

- [@orimarselasirg](https://github.com/orimarselasirg)







