import { useState } from "react";
import './Collapse.css'
import fleche from "../../assets/arrow_up.svg"
export default function Collapse({ dropdownTitle, dropdownContent }) {
    const [active, setActive] = useState(false);

    return (
        <div className="dropdown-item">
            <div className="dropdown-bar">
                <h2 className="dropdown-title">{dropdownTitle}</h2>

                <div
                    className={`dropdown-icon ${active ? "active" : ""}`}
                    onClick={() => setActive(!active)}
                >
                    <img src={fleche} alt="Flèche" />
                </div>
            </div>

            <div className={`dropdown-section ${active ? "active" : ""}`}>
                <div className={`dropdown-content ${active ? "active" : ""}`}>{dropdownContent}</div>
            </div>
        </div>
    );
}