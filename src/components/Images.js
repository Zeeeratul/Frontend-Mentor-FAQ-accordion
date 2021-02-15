import WomanOnlineDesktop from '../assets/illustration-woman-online-desktop.svg'
import BgPatternDesktop from '../assets/bg-pattern-desktop.svg'
import { ReactComponent as IllustrationBoxDesktop } from '../assets/illustration-box-desktop.svg'
import './Images.css'

function Images() {
    return (
        <div className="images">
            <img alt="women" className="images--women" src={WomanOnlineDesktop} />
            <img alt="pattern" className="images--pattern" src={BgPatternDesktop} />
            <IllustrationBoxDesktop className="images--box" />
        </div>
    )
}

export default Images