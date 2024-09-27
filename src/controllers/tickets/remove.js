export function remove({req, res, db}) {
    const { id } = req.params   
    
    db.delete("tickets", id)

    return res.end()
    }