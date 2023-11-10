import { SET_ASSESSMENT_STARTED, SET_ASSESSMENT_FINISHED, SET_ASSESSMENT_DATA, SET_USER_DATA, SET_USER_CURRENT_BOX } from './constants';

export const initState = {
    isAssignmentStarted: false,
    isAssignmentFinished: false,
    userCurrentBox: 0
}

const reducer = (state, action) => {
    console.log('Action: ', action)
    console.log('Prev state: ', state)

    let newState 

    switch (action.type) {
        case SET_ASSESSMENT_STARTED:
            newState = {
                ...state,
                "isAssignmentStarted": true
            }
            break;
        case SET_ASSESSMENT_FINISHED:
            newState = {
                ...state,
                "isAssignmentFinished": true
            }
            break;
        case SET_ASSESSMENT_DATA:
            newState = {
                ...state,
                "data": action.payload
            }
            break;
        case SET_USER_DATA:
            newState = {
                ...state,
                'userData': action.payload
            }
            break;
        case SET_USER_CURRENT_BOX:
            newState = {
                ...state,
                'userCurrentBox': action.payload
            }
            break;
        default:
            break;
    }

    console.log('New state: ', newState)

    return newState
}

export default reducer