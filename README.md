![logo](./public/ARGENTBANK.svg)
<br />
<br />
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org)
[![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
<br />

As it stands, ArgentBank is an online banking application with a functional backend that processes data and exposes three routes. One for authentication, one for retrieving the profile after login, and the last for updating the username. The frontend remains to be developed, which is precisely the purpose of this mission.

**Mission-Phase 1:** Build a React web app powered by Redux for authentication and profile editing features with data persistence.
<br />**Mission-Phase 2:** Prepare future routes for upcoming transaction features using the Swagger Editor tool and provide them in a YAML file.

![icon](./public/icon-link.svg) [see the backend](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master)
<br /> ![icon](./public/icon-link.svg) [see the documentation]()
<br /> ![icon](./public/icon-link.svg) [see the issues of mission](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE)

![icon](./public/features.png)

<br /> 

![icon](./public/icon-upload.svg) **Clone the ARGENTBANK project**

```bash
git init
git clone https://github.com/JulienLOG/argentBank.git
npm install
```
<br />

![icon](./public/icon-route.svg) **Preview of routes**
```bash
POST /api/v1/user/login
Headers: Content-Type: application/json
Body: { "email": "user@mail.com", "password": "*****" }
→ 200: { "body": { "token": "jwt..." } }
```

```bash
POST /api/v1/user/profile
Headers: Authorization: Bearer <token>
→ 200: { "body": { "id": "...", "email": "...", "firstName": "...", "lastName": "..." } }
```

```bash
PUT /api/v1/user/profile
Headers: Authorization: Bearer <token>, Content-Type: application/json
Body: { "firstName": "Steve", "lastName": "Rogers" }
→ 200: { "body": { "id": "...", "email": "...", "firstName": "Steve", "lastName": "Rogers" } }
```
