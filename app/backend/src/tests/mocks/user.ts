const user = {
  email: 'admin@admin.com', id: 1, password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW', role: 'admin', username: 'Admin',
};

const correctBody = {
  email: "admin@admin.com",
  password: "secret_admin"
}

const incorrectBodyInvalidPassword = {
  email: "admin@admin.com",
  password: "invalidPassword"
}

const incorrectBodyInvalidEmail = {
  email: "incorrect@incorrect1231231.com",
  password: "secret_admin"
}

const missingBodyEmail = {
  password: "invalidPassword"
}

const missingBodyPassword = {
  email: "admin@admin.com",
}

const incorrectBodyResponse = { message: 'Incorrect email or password' }
const missingBodyResponse = { message: "All fields must be filled" }

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NjY2NTQ2NTd9."

export {
  user,
  correctBody,
  incorrectBodyInvalidPassword,
  incorrectBodyInvalidEmail,
  token,
  incorrectBodyResponse,
  missingBodyEmail,
  missingBodyPassword,
  missingBodyResponse,
}