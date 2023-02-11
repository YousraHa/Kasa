import '../css/equipments.css'

// const Equipments = (props) => {
//     // const {
//     //     title,
//     //     id,
//     //     cover
//     // } = props;

//     return (
//         <>
//     <div className='equipment'>
//         {/* <p>{title}</p> */}
//         {/* <p>{id}</p> */}
//         {/* <p>{cover}</p> */}
//         {/* <img src={cover} alt="image" style={{height: "150px", backgroundImage: "URL({cover})"}} /> */}

//         {/* <p>{description}</p>
//         <p>{rating}</p>
//         <p>{location}</p>
//         <p>{title}</p> */}

//     </div>
//         <div class="dropdown">
//             <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//             <div id="myDropdown" class="dropdown-content">
//         <a href="#">Link 1</a>
//         <a href="#">Link 2</a>
//         <a href="#">Link 3</a>
//        </div>
//     </div>
//         </>
    
//     );
// }

// export default Equipments;

import React from "react";


export default  function Equipments () {
    const handleMenuOne = () => {
      console.log('clicked one');
    };
  
    const handleMenuTwo = () => {
      console.log('clicked two');
    };
  
    return (
      <Dropdown
        trigger={<div>Dropdown</div>}
        menu={[
          <button onClick={handleMenuOne}>Menu 1</button>,
          <button onClick={handleMenuTwo}>Menu 2</button>,
        ]}
      />
    );
  };
  
  const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="dropdown">
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };