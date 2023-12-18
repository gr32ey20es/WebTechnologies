import { 
    SET_USER_CURRENT_BOX, SET_EXAM_TIMELIMIT, SET_EXAM_TITLE,
    SET_EXAM_DATA, SET_EXAM_TYPE, SET_EXAM_OPTION, SET_EXAM_ANSWER, SET_EXAM_QUESTION, 
    ADD_EXAM_QUESTION , ADD_EXAM_OPTION, DEL_EXAM_QUESTION, DEL_EXAM_OPTION
} from "./constants"

export const initState = {
    user: {
        currentBox: null
    },
    exam: {
        title: '',
        timeLimit: 0,
        questions: [],
    }
}

const reducer = (state, action) => {
    // console.log('Action: ', action)
    // console.log('Prev state: ', state)

    let newState,
        idQuestion, idOption, value,
        type, isSelected, answers,
        operator

    switch (action.type) {
        case SET_USER_CURRENT_BOX:
            operator = action.payload
            newState = state
            
            if(Number.isInteger(operator))
                newState.user.currentBox = operator
            else
                newState.user.currentBox += 5 * (operator === "prev" ? -1 : 1)
            break;
            
        case SET_EXAM_TIMELIMIT:
            newState = state
            newState.exam = {
                ...newState.exam,
                'timeLimit': action.payload
            }
            break;
        
        case SET_EXAM_TITLE:
            newState = state
            newState.exam = {
                ...newState.exam,
                'title': action.payload
            }
            break;
            
        case SET_EXAM_DATA:
            newState = state
            if(action.payload === null) 
                newState = {...initState}
            else
                newState.exam = {
                    ...newState.exam,
                    ...action.payload
                }
            break;

        case SET_EXAM_TYPE:
            idQuestion = action.payload.idQuestion
            type = action.payload.type
            newState = state

            newState.exam.questions[idQuestion]
            .type = (type === 'radio' ? 'checkbox' : 'radio')
            
            if(type === 'checkbox') 
                newState.exam.questions[idQuestion].answers = 
                [newState.exam.questions[idQuestion].answers[0]]


            break;
        case SET_EXAM_OPTION: 
            idQuestion = action.payload.idQuestion
            idOption = action.payload.idOption
            value = action.payload.value
            newState = state
            
            newState.exam.questions[idQuestion]
            .options[idOption] = value
            break;

        case SET_EXAM_ANSWER:
            idQuestion = action.payload.idQuestion
            idOption = action.payload.idOption
            type = action.payload.type
            newState = state

            answers = newState.exam.questions[idQuestion].answers
            if (type === "radio") {
                newState.exam.questions[idQuestion]
                .answers = [idOption];
            }
            else {
                isSelected = answers.includes(idOption)
                
                if(!isSelected)
                    newState.exam.questions[idQuestion]
                    .answers = [...answers, idOption].sort()
                else
                    newState.exam.questions[idQuestion]
                    .answers = answers.filter(item => item !== idOption)
            }
            break;

        case SET_EXAM_QUESTION:
            idQuestion = action.payload.idQuestion
            value = action.payload.value
            newState = state

            newState.exam.questions[idQuestion]
            .question = value
            break;

        case ADD_EXAM_QUESTION:
            newState = state
            newState.exam.questions.push({        
                type: "radio",
                answers: [],
                question: '',
                options: ['', ''],
            })
            break;
        case ADD_EXAM_OPTION:
            idQuestion = action.payload.idQuestion
            newState = state

            newState.exam.questions[idQuestion].options.push('')
            break;

        case DEL_EXAM_QUESTION:
            idQuestion = action.payload.idQuestion
            newState = state

            newState.exam.questions.splice(idQuestion, 1)
            break;

        case DEL_EXAM_OPTION:
            idQuestion = action.payload.idQuestion
            idOption = action.payload.idOption
            newState = state

            newState.exam.questions[idQuestion].options.splice(idOption, 1)
            break;

        default:
            break;
    }

    // console.log('New state: ', newState)

    return newState
}

export default reducer