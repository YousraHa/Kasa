import * as React from 'react';
// import './ddtest.css'
import '../css/dropdown.css'


export default  function DropDown1 (props) {

  const {
    text,
    title
  } = props;

//   const handleMenuOne = () => {
//     console.log('clicked one');
//   };

//   const handleMenuTwo = () => {
//     console.log('clicked two');
//   };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
    return (
        <Dropdown
            open={open}
            trigger={<div>{title}</div>}
            menu={[
                <p>{text}</p>
            ]}
      />
    )
};

/////////////////////////////////////////////

// export function DropDown2(props){
//     const {
//         text,
//         title
//       } = props;
    
//     //   console.log(text[0], 'text');
    
//       const handleMenuOne = () => {
//         console.log('clicked one');
//       };
    
//       const handleMenuTwo = () => {
//         console.log('clicked two');
//       };
//       const [open, setOpen] = React.useState(false);
    
//       const handleOpen = () => {
//         setOpen(!open);
//       };
    
//       const test = text.map(elem=><li>{elem}</li>);

//           return (
//                 <Dropdown
//                     open={open}
//                     trigger={<div>{title}</div>}
//                     menu={test}
//               />
//           );
// };


/////////////////////////////

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <span className="material-symbols-outlined">
        { !open ? "expand_more": "expand_less"}
      </span> 
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  this.onClick();
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


//   <span class="material-symbols-outlined">
// expand_less
// </span>

// <span class="material-symbols-outlined">
// expand_more
// </span>

// export default function DropDown () {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   const handleMenuOne = () => {
//     // do something
//     setOpen(false);
//   };

//   const handleMenuTwo = () => {
//     // do something
//     setOpen(false);
//   };

//   return (
//     <Dropdown
//       open={open}
//       trigger={<div onClick={handleOpen}>Dropdown</div>}
//       menu={[
//         <div onClick={handleMenuOne}>Menu 1</div>,
//         <div onClick={handleMenuTwo}>Menu 2</div>,
//       ]}
//     />
//   );
// };

// const Dropdown = ({ open, trigger, menu }) => {
//   return (
//     <div className="dropdown">
//       {trigger}
//       {open ? (
//         <ul className="menu">
//           {menu.map((menuItem, index) => (
//             <li key={index} className="menu-item">{menuItem}</li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   );
// };
