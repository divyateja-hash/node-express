const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// 404 Error Route
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Catch-all Route for all other routes
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});