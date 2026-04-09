import './Settings.css'

function Settings(){
    const tabs = [
        {name : "General"},
        {name : "Notifications"},
        {name : "Billing Plans"},
        {name : "Privacy"}
    ]
    return (
        <>
            <div className="settings-container">
                <div className="settings-top">
                    <p className="tab-name">
                        Settings
                    </p>
                </div>
                <div className="settings-bottom">
                    <div className="settings-left">
                        {tabs.map((tab) => (
                            <div className="left-tabs" key={tab.name}>
                                {tab.name}
                            </div>
                        ))}
                    </div>
                    <div className="settings-right"></div>
                </div>
            </div>
        </>
    );
}

export default Settings ;