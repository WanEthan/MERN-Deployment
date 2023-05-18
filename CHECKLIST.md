# checklist

- [x] create a new directory (server folder)
- [ ] inside the directory create virtural env by running:

# make `server`

- [ ] [`models`](server/models/models.js)
- [ ] [`config`](server/config/config.js)
- [ ] [`controllers`](server/controllers/controllers.js)
- [ ] [`routes`](server/routes/routes.js)

```bash
npm init -y
```

- [ ] activate the virtual env every time you open a new terminal:
- [ ] create the package.json for our server. We will then need to install our dependencies:

```bash
npm install express
npm install mongoose
npm install dotenv
```
```bash
npm install cors
```


## via the terminal or the UI, create a new file called server.js.
- [ ] create [server.js](server/server.js)

##  create an enviromental file and a gitignore
- [ ] create [.env](server/.env)
- [ ] create [.gitignore](server/.gitignore)

# .gitignore, add the following

```bash
node_modules
.env
```

## add .env

```bash
PORT=8000
DB=my_db
# mongo atlas connection
ATLAS_USERNAME=YOUR_ATLAS_USERNAME
ATLAS_PASSWORD=YOUR_ATLAS_PASSWORD
```


##  within the server.js add the following code:

```js
// import the express module (dependencies) using JavaScript's require() statement, and then invoke express.
const express = require("express");
const cors = require('cors') // This is new
const app = express();
require('dotenv').config();
const port = process.env.PORT;


// make sure these lines are above any app.get or app.post code blocks
// these two lines are for creating new object into database
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// create our routes and controller to send some data. (CRUD)
app.use(cors()) // This is new
const router = require("./routes/users_routes")
router(app)


// the app.listen() line of code that actually runs our server on a specified port.
app.listen(port, () => console.log(`Listening on port: ${port}`));

```




- [ ] go to [localhost:5000](http://localhost:8000/api/.....)


## /// frontend  (client folder)
 ```bash
npx create-react-app client
 ```

```bash
npm install axios
npm install cors
npm install react-router-dom
npm install react-bootstrap bootstrap
```

# Go to app.js, then add the line
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

# Go to index.js, then add the following lines

```js
import { BrowserRouter } from 'react-router-dom';


    <BrowserRouter>
      <App />
    </BrowserRouter>
```

## start the application 

```bash
  cd client
  npm start
```

