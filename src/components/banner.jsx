import '../css/banner.css'
// import url  from "./banner2.png"

const Banner = (props) => {
    const  {
        name,
        pic,
        height
    } = props

//   const url1 = '../../public/banner2.png';

    return (
    <div className='banner' name={name} style={{backgroundImage: `url(${pic})`, height:`${height}`}}>
        <p>{name}</p>
    </div>
    );
}

// return (
//     <div className='banner' name={name}>
//         <img src={pic} alt="img" />
//         <p>{name}</p>
//     </div>
//     );
// }

export default Banner;