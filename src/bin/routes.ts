import express, { response } from 'express';
import { testRoute } from './controllers/V1';
import path from 'path';

const router = express.Router();

router.use(
    '/public/',
    express.static(path.resolve('./client/build/public/'))
);

router.get('/', (request, response) => {
    response.sendFile(path.resolve('./client/build/index.html'));
});

//V1 Routes
router.get('/V1/test', testRoute);
//V2 Routes

export default router;
