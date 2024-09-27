export function index({req, res, db}) {
    const { status } = req.query

    const filters = status ? { status } : null

    const tickets = db.select("tickets", filters)

    return res.writeHead(200).end(JSON.stringify(tickets))
}