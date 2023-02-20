import { redirect } from 'react-router-dom';
import '../css/card.css'

const Card = (props) => {
    const {
        title,
        id,
        cover
    } = props;

    // console.log(title, id);
    const path = `/housing/${id}`;

    return (
    <a href={path}>
        <div className='card' style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${cover})`, backgroundSize:"cover", backgroundRepeat: "no-repeat"}}>
            <p>{title}</p>
        </div>
    </a>
    );
}

export default Card;