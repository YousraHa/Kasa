import '../css/nav.css'

const Nav = () => {
    return (
    <nav className='navigation'>
        <a href="/">
        <img src="../../LOGO.png" alt="logo Kasa" style={{height: "40px"}}/>
        </a>
      <div
        className="navigation-menu">
        <ul >
          <li >
            <a href="/" className='aa'>Accueil</a>
          </li>
          <li>
            <a href="/about" className='aa'>A propos</a>
          </li>
        </ul>
        </div>
    </nav>
    );
}

export default Nav;