import { 
    SET_USER_CURRENT_BOX, SET_EXAM_TIMELIMIT, SET_EXAM_TITLE,
    SET_EXAM_DATA, SET_EXAM_TYPE, SET_EXAM_OPTION, SET_EXAM_ANSWER, SET_EXAM_QUESTION, 
    ADD_EXAM_QUESTION , ADD_EXAM_OPTION, DEL_EXAM_QUESTION, DEL_EXAM_OPTION
} from "./constants"

export const setUserCurrentBox = (payload) => {
    return {
        type: SET_USER_CURRENT_BOX,
        payload
    }
}

export const setExamTimeLimit = (payload) => {
    return {
        type: SET_EXAM_TIMELIMIT,
        payload
    }
}

export const setExamTitle = (payload) => {
    return {
        type: SET_EXAM_TITLE,
        payload
    }
}

export const setExamData = (payload) => {
    return {
        type: SET_EXAM_DATA,
        payload
    }
}

export const setExamType = (payload) => {
    return {
        type: SET_EXAM_TYPE,
        payload
    }
}

export const setExamOption = (payload) => {
    return {
        type: SET_EXAM_OPTION,
        payload
    }
}

export const setExamAnswer = (payload) => {
    return {
        type: SET_EXAM_ANSWER,
        payload
    }
}

export const setExamQuestion = (payload) => {
    return {
        type: SET_EXAM_QUESTION,
        payload
    }
}

export const addExamQuestion = (payload) => {
    return {
        type: ADD_EXAM_QUESTION,
        payload
    }
}

export const addExamOption = (payload) => {
    return {
        type: ADD_EXAM_OPTION,
        payload
    }
}

export const delExamQuestion = (payload) => {
    return {
        type: DEL_EXAM_QUESTION,
        payload
    }
}

export const delExamOption = (payload) => {
    return {
        type: DEL_EXAM_OPTION,
        payload
    }
}