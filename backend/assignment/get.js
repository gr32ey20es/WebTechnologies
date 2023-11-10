// temporary
const assignment = {
    timeLimit: 180,
    data: [
    {
        id: 0,
        type: "radio",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }, {
        id: 1,
        type: "checkbox",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }, {
        id: 2,
        type: "radio",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }, {
        id: 3,
        type: "checkbox",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }, {
        id: 4,
        type: "radio",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }, {
        id: 5,
        type: "checkbox",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }, {
        id: 6,
        type: "radio",
        question: "Ngoai an com ra ban co an cut khong?",
        options: ["Yes", "No", "Both", "None"],
    }, {
        id: 7,
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
