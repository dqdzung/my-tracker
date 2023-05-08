import express from 'express';
import cors from 'cors';
import handler from './build/handler';

const app = express();
const port = 3000;

app.use(cors());
app.use(handler());

app.get('/', (req, res) => {
	res.send('dmm');
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
