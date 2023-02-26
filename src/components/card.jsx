import '../css/card.css'

const Card = (props) => {
    const {
        title,
        id,
        cover
    } = props;

    const path = `/housing/${id}`;

    return (
        <div className='card' style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${cover})`, backgroundSize:"cover", backgroundRepeat: "no-repeat"}}>
            <a href={path} className="link">
                <p>{title}</p>
            </a>
        </div>
    );
}

export default Card;