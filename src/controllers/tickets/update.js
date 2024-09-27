export function update({req, res, db}) {
    const { id } = req.params
    const { equipment, description } = req.body

    db.update("tickets", id, {
        equipment,
        description,
        updated_at: new Date()
    })

    return res.end()
}