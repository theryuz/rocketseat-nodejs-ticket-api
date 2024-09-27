export function updateStatus({req, res, db}) {
    const { id } = req.params

    const { solution } = req.body 

    db.update("tickets", id, {
        status: "closed",
        solution: solution,
        closed_at: new Date()
    })

    return res.end()
}