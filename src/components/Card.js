import '../css/assets.css';
import '../css/card.css';

const Card = (props) => {
    return (
        <div className="card" id={props.id}>
            <div className="resepCaption">
                <p>Fish pie</p>
                <div className="buttonCard">
                    <button className="favorit">favorit</button>	
                    <button className="heart"><i className="far fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Card;
