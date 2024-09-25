export function create({req, res}) {
    const { equipment, description, user_name} = req.body

    const ticket = {
        equipment,
        description,
        user_name
    }

    return res.end("Ticket created with success!" + JSON.stringify(ticket))
}