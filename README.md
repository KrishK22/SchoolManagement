
# School Management

## Features

- Add New Schools.
- Get Users Nearby Schools in sorted Order.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=8080`

`DATABASE_URL=postgresql://neondb_owner:<DB_PASSWORD>@ep-round-sound-a4wrbf2q-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require`

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

Prisma Setup
```bash
 npx prisma generate 
```

Build
```bash
 npm run build
```

Start the server

```bash
  npm run start
```

## API Reference
`http://localhost:8080`

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


## Tech Stack

**Server:** Typescript,Node, Express,Prisma,
**DB-HOSTING** neon.tech


## Appendix

PostmanCollection -https://documenter.getpostman.com/view/41257237/2sB2j3BXHk

Deployed Link
Examples
POST request- https://schoolmanagement-production-1cdb.up.railway.app/api/addSchool
GET request -https://schoolmanagement-production-1cdb.up.railway.app/api/listSchools?latitude=12.9600&longitude=77.6200





