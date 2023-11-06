import { SET_ASSESSMENT_DATA, SET_ASSESSMENT_STARTED, SET_ASSESSMENT_FINISHED } from "./constants"

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