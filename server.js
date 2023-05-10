import express from 'express';
import cors from 'cors';
import { handler } from './build/handler.js';

const app = express();
const port = 9000;

app.use(cors());
app.use(handler);

app.get('/health-check', (_, res) => {
	res.end('ok');
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}....`);
});
