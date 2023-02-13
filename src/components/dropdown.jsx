import * as React from 'react';
import '../css/dropdown.css'

export default  function DropDown (props) {

  const {
    text,
    title
  } = props;

  const handleMenuOne = () => {
    console.log('clicked one');
  };

  const handleMenuTwo = () => {
    console.log('clicked two');
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Dropdown
      trigger={<div>{title}
      {/* <span class="material-symbols-outlined">
        { !open ? "expand_less": "expand_more"}
      </span> */}
      </div>}
      menu={[
        <div onClick={handleMenuOne}>{text}</div>,
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
      <span class="material-symbols-outlined">
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


//   <span class="material-symbols-outlined">
// expand_less
// </span>

// <span class="material-symbols-outlined">
// expand_more
// </span>