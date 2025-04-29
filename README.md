
# School Management

## Run Locally

Clone the project

```bash
  git clone https://github.com/KrishK22/SchoolManagement.git
```

Go to the project directory

```bash
  cd SchoolManagement
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API Reference

#### Post New Schools

```http
  POST /api/addschool
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` name  ` | `string` | **Required**|
| `address `| `string` | **Required**|
| `latitude `| `number` | **Required**|
| `longitude `| `number` | **Required**|

#### Get Schools

```http
  GET /api/listSchools?latitude=${latitude}&longitude=${longitude}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `latitude`      | `string` | **Required**. latitude of user |
| `longitude `| `string` | **Required**. longitude of user|


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`

## Features

- Add New Schools.
- Get Users Nearby Schools in sorted Order.

## Tech Stack

**Server:** Typescript,Node, Express,Prisma


## Appendix

PostmanCollection -https://documenter.getpostman.com/view/41257237/2sB2j3BXHk





