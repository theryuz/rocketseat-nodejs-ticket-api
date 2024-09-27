import { routes } from '../routes/index.js';
import { Database } from '../database/database.js';
import { extractQueryParams } from '../utils/extractQueryParams.js';

const db = new Database();

export function routeHandler(req, res) {
    const route = routes.find((route) => {
        return route.method === req.method && route.path.test(req.url);

    })

    if (route) {
        const routeParams = req.url.match(route.path)

        const { query, ...params } = routeParams.groups

        req.params = params

        req.query = query ? extractQueryParams(query) : {}

        return route.controller({req, res, db});
    }

    return res.writeHead(404).end();
}