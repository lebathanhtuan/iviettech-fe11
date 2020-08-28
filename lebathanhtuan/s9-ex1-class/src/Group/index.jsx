import React from 'react';

import './styles.css';

function Group(props) {
  const {
    groupData,
    groupIndex,
    groupActiveIndex,
    cartData,
    setGroupActiveIndex,
    setCartData,
    isCart,
  } = props;

  const renderMembers = () => {
    return groupData.members.map((member, index) => {
      if (index > 2) {
        return null;
      }
      return (
        <img
          key={index}
          className="border rounded-circle mr-1"
          src={member.image}
          alt={member.name}
          width={50}
          height={50}
        />
      )
    })
  }

  const handleSelectGroup = () => {
    // setGroupActiveIndex(groupIndex);
    if (cartData.findIndex((data) => data.name === groupData.name) === -1) {
      setCartData([
        ...cartData,
        groupData,
      ]);
    }
  }

  const handleDeleteGroup = () => {
    // setGroupActiveIndex(groupIndex);
    const cartDataIndex = cartData.findIndex((data) => data.id === groupData.id)
    if (cartDataIndex !== -1) {
      const newCartData = cartData;
      newCartData.splice(cartDataIndex, 1);
      setCartData([
        ...newCartData,
      ]);
    }
  }

  const renderMoreMember = () => {
    if (groupData.members.length <= 3) return null;
    return (
      <div
        className="d-flex bg-dark text-white justify-content-center align-items-center border rounded-circle"
        style={{ width: 50, height: 50 }}
      >
        +{groupData.members.length - 3}
      </div>
    );
  }
  
  return (
    <div className="col-md-4">
      <div className={`item ${!isCart && cartData.findIndex((data) => data.id === groupData.id) !== -1 && 'item-active'}`}>
        <div className="p-2">
          <div className="d-flex justify-content-between">
            <h4>{groupData.name}</h4>
            {isCart
              ? (
                <button
                  className="ml-4 btn btn-outline-danger"
                  onClick={() => handleDeleteGroup()}
                >
                  Delete
                </button>
              )
              : (
                <button
                  className="ml-4 btn btn-primary"
                  onClick={() => handleSelectGroup()}
                >
                  Select
                </button>
              )
            }
            
          </div>
          <div className="d-flex">
            {renderMembers()}
            {renderMoreMember()}
          </div>
        </div>
        <div className="p-2 border-top bg-light">
          <div>{groupData.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Group;
