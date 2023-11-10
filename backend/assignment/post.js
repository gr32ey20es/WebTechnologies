export function postAssignment(app) {
    app.post('/postTest', (req, res) => {
        console.log(req.body)
        res.send("Conguration")
    }) 
}
