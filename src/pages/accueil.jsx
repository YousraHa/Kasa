import Banniere from '../components/banniere';
import Card from '../components/card'
import '../components/card.css'
import './accueil.css'

const Accueil=()=> {
    return (
      // <>
      <div className='container'>
        <Banniere/>
        <Card />
        {/* <Card/> */}
      </div>
      // </>
    );
}

export default Accueil