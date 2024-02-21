```javascript
const express = require('express');
const cors = require('cors');
const figmaController = require('./controllers/figmaController');
const webScraperController = require('./controllers/webScraperController');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/figma', figmaController);
app.use('/web-scraper', webScraperController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
```