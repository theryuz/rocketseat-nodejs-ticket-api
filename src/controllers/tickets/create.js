import { randomUUID } from 'node:crypto'

export function create({req, res, db}) {
    const { equipment, description, user_name} = req.body

    const ticket = {
        id: randomUUID(),
        equipment,
        description,
        user_name,
        status: "open",
        created_at: new Date(),
        updated_at: new Date(),
    }

    db.insert('tickets', ticket)

    return res.writeHead(201).end("Ticket created with success!" + JSON.stringify(ticket))
}