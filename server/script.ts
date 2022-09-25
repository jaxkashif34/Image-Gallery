import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { allowedFiles, upload } from './middleware';
import cors from 'cors';
dotenv.config();
const app = express();

app.use(cors());

app.post('/upload', upload, (req: Request, res: Response) => {
  const { files } = req;
  if (files?.length === 0) {
    res.send(`only ${Object.keys(allowedFiles).map((key) => ` ${key} : `)} are allowed`);
  }

  res.send(`File Successfully uploaded`);

  console.log(files);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is up on http://localhost:${port}`));
