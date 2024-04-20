function Header() {
    return (
        <header className="header">
            <div className="header-subsection header-files">
                <div className="header-files__logo">Logo /</div>
                <div className="header-files__projects header-select"> 
                    <div>Projects</div>
                    <div className="header-files__selector">Selector</div>
                    /
                </div>
                <div className="header-files__prompts header-select"> 
                    <div>Prompts</div>
                    <div className="header-files__selector">Selector</div>
                    
                </div>
            </div>
            <div className="header-subsection header-user">
                <div className="header-user__">Insert API key here</div>
                <div className="header-user__">USER</div>
            </div>
        </header>
    )
}

export default Header