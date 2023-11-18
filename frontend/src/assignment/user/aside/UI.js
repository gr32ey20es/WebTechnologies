import { Timer } from "../timer"
import '../basic.css'
import styles from './ui.module.css'

function UI ({ nLinkBox, currentBox, onLink }) {
    function LinkBoxs() {
        let linkBoxs = []
        
        for (let i=0; i < nLinkBox; i++) {
            let style = (currentBox<=i && i<currentBox+5) ?
            {backgroundColor: 'lightgrey'} : {}

            linkBoxs.push(
                <label key={i} className={"center "+styles.linkBox} style={style}>
                    <a  value={i}
                        href={"#question"+i} 
                        onClick={onLink}
                    >{i+1}</a>
                </label>
            )
        }

        return <>{linkBoxs}</>
    }

    return (
        <aside className={"center column " + styles.aside}>
            <div className={"center column " + styles.informations}>
                <div className={styles.timer}>
                    <Timer/>
                </div>
                <div className={"center "+styles.linkBoxs}>
                    {LinkBoxs()}
                </div>
            </div>
        </aside>
    )
}

export default UI;