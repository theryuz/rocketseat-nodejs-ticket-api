export function index({req, res, db}) {
    const tickets = db.select('tickets')
    return res.writeHead(200).end(JSON.stringify(tickets))
}