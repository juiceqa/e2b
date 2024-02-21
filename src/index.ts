import express from 'express';
import { figmaController } from './server/controllers/figmaController';
import { webScraperController } from './server/controllers/webScraperController';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/figma', figmaController);
app.use('/web-scraper', webScraperController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});