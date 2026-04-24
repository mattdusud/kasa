import { useState } from "react";
import './Collapse.css'

export default function Collapse({ id, dropdownTitle, dropdownContent }) {
    const [active, setActive] = useState(false);

    return (
        <div className="dropdown-item">
            <div className="dropdown-bar">
                <h2 className="dropdown-title">{dropdownTitle}</h2>

                <div
                    className={`dropdown-icon ${active ? "active" : ""}`}
                    onClick={() => setActive(!active)}
                >
                    <img src="/src/assets/arrow_up.svg" alt="Flèche" />
                </div>
            </div>

            <div className={`dropdown-section ${active ? "active" : ""}`}>
                <div className={`dropdown-content ${active ? "active" : ""}`}>{dropdownContent}</div>
            </div>
        </div>
    );
}