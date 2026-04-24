import { useState } from "react";
import './Carrousel.css'

export default function Carrousel({ images }) {
    const [slideNumber, setSlideNumber] = useState(0);

    return (
        <div className="carrousel">
            <div className="carrousel-images">
                <img src={images[slideNumber]} alt="Image d'appartement" />
            </div>
            {images.length > 1 &&
                <div className="carrousel-controls">
                    <button className="carrousel-arrow" onClick={() => setSlideNumber(slideNumber === 0 ? images.length - 1 : slideNumber - 1)}>
                        <img src="/src/assets/arrow_left.svg" alt="Flèche gauche" />
                    </button>
                    <button className="carrousel-arrow" onClick={() => setSlideNumber(slideNumber === images.length - 1 ? 0 : slideNumber + 1)}>
                        <img src="/src/assets/arrow_right.svg" alt="Flèche droite" />
                    </button>
                </div>
            }
            {images.length > 1 &&
                <div className="carrousel-counter">
                    {slideNumber + 1} / {images.length}
                </div>
            }
        </div>
    );
}
