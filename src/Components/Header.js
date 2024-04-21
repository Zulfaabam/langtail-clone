import { LuChevronsUpDown } from "react-icons/lu";
import { FaFingerprint } from "react-icons/fa";

function Header(props) {
    const { jsonData } = props;

    return (
        <header className="header">
            <div className="header-subsection header-files">
                <div className="header-files__logo">Logo /</div>
                <div className="header-files__projects header-select"> 
                    <div>Projects</div>
                    <div className="header-files__selector">
                        <LuChevronsUpDown />
                    </div>
                    /
                </div>
                <div className="header-files__prompts header-select"> 
                    <div>Prompts</div>
                    <div className="header-files__selector">
                        <LuChevronsUpDown />
                    </div>
                    
                </div>
            </div>
            <div className="header-subsection header-user">
                <div className="header-user__API">
                    <span className="icon icon-fingerprint"><FaFingerprint /></span>
                <input className="header-user__input" name="API-key" id="API-key" placeholder="Enter API key here"></input>
                </div>
                <div className="header-user__">{jsonData.user}</div>
            </div>
        </header>
    )
}

export default Header