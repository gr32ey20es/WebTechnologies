import { SET_USER_DATA, SET_ASSESSMENT_DATA, SET_ASSESSMENT_STARTED, SET_ASSESSMENT_FINISHED, SET_USER_CURRENT_BOX } from "./constants"

export const setAssessmentStarted = (payload) => {
    return {
        type: SET_ASSESSMENT_STARTED,
        payload
    }
}

export const setAssessmentFinished = (payload) => {
    return {
        type: SET_ASSESSMENT_FINISHED,
        payload
    }
}

export const setAssessmentData = (payload) => {
    return {
        type: SET_ASSESSMENT_DATA,
        payload
    }
}

export const setUserData = (payload) => {
    return {
        type: SET_USER_DATA,
        payload
    }
}

export const setUserCurrentBox = (payload) => {
    return {
        type: SET_USER_CURRENT_BOX,
        payload
    }
}