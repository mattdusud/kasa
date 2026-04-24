import './Rating.css'

export default function Rating({ value, max }) {
    const stars = [];
    for (let i = 0; i < max; i++) {
        stars.push(
            <img
                key={i}
                src={i < value ? "/src/assets/star_full.svg" : "/src/assets/star_empty.svg"}
                alt="étoile de notation"
                className="rating-star"
            />
        );
    }
    return (
        <div className="rating-bar">
            {stars}
        </div>
    );
}