
import * as Router from 'koa-router';

import { create, find, findAll, remove } from '../controllers/Note';

const router = new Router();

router.get('/notes', findAll);
router.get('/note/:id', find);
router.post('/note', create);
router.delete('/note', remove);

export const routes = router.routes();
