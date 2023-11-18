import { useContext } from "react"
import Context from './Context'

const useAssessment = () => {
    const [state, dispatch] = useContext(Context);

    return [state, dispatch]
}

export {useAssessment};