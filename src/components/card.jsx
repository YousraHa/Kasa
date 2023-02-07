import '../css/card.css'

const Card = (props) => {
    const {
        title,
        id,
        cover
    } = props;

    return (
    <div className='card' style={{backgroundImage: `url(${cover})`, backgroundSize:"cover", backgroundRepeat: "no-repeat"}}>
        <p>{title}</p>
        {/* <p>{id}</p> */}
        {/* <p>{cover}</p> */}
        {/* <img src={cover} alt="image" style={{height: "150px", backgroundImage: "URL({cover})"}} /> */}

        {/* <p>{description}</p>
        <p>{rating}</p>
        <p>{location}</p>
        <p>{title}</p> */}

    </div>
    );
}

export default Card;