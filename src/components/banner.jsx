import '../css/banner.css'

const Banner = (props) => {
    const  {
        name,
        pic,
        height,
        disabled
    } = props

    return (
    <div className='banner' name={name} style={{backgroundImage: `url(${pic})`, height:`${height}`}}>
        <div className={disabled ? 'banner' : 'banner1'} disabled={disabled}>
        </div>
        <p>{name}</p>
    </div>
    );
}

export default Banner;