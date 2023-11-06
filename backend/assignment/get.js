// temporary
const assignment = {
    timeLimit: 10,
    data: [
    {
        type: "radio",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }, {
        type: "checkbox",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }, {
        type: "radio",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }, {
        type: "checkbox",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }]
}

export function getAssignment(app) {
    app.get('/test', (req, res) => {
        res.json(assignment);
    }) 
}
