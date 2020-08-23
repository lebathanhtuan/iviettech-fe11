import React from 'react';
import './styles.css';

function Group(props) {
  const { 
    id,
    name, 
    description, 
    members, 
    activeIndex,
    activeGroup,
    setActiveGroup,
    cartData,
    setCartData,
    groupItem,
    isCart
  } = props;
  
  const renderMembers = () => {
    return members.map((member, index) => {
      if (index < 3) {
        return (
          <img key={index} className="image" src={ member.image } alt="member"/>   
        );
      } else {
        return null;
      }
    });
  }

  const renderRemainder = () => {
    let numOfRemainder = members.length - 3
    if (numOfRemainder > 0) {
      return (
        <div className="container-remainder">
          <div className="remainder"></div>
          <div className="number">+{numOfRemainder}</div>
        </div>
      );
    }
  }

  const handleSelectGroup = () => {
    setActiveGroup(activeIndex)
    const cartIndex = cartData.findIndex((data) => data.id === groupItem.id);
    if (cartIndex === -1) {
      setCartData([
        ...cartData,
        groupItem
      ]);      
    }
  }

  const handleDeleteGroup = () => {
    const cartIndex = cartData.findIndex((data) => data.id === groupItem.id);
    cartData.splice(cartIndex, 1);
    setCartData([...cartData]);
  }

  return (
    <div className="col-4">
      <div className={`item ${activeIndex === activeGroup ? "active" : ""}`}>
        <div className="d-flex my-3">
          <div className="font-weight-bold mx-3 d-flex align-items-center">{ name }</div>
          {isCart ? (
            <button 
              className="btn btn-danger btn-sm" 
              onClick={() => handleDeleteGroup()}>Delete
            </button>) : (
            <button 
              className="btn btn-success btn-sm" 
              onClick={() => handleSelectGroup()}>Select
            </button>)}
        </div>
        <div className="container-image">{ renderMembers() } { renderRemainder() }</div>
        <div className="border-top px-3 py-2 bg-light">{ description }</div>
      </div>
    </div>
  );
}

export default Group;
