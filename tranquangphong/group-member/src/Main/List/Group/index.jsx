import React from 'react';
import './styles.css';

function Group(props) {
  const { 
    name, 
    description, 
    members, 
    activeIndex,
    activeGroup,
    setActiveGroup
   } = props;

  const renderMembers = () => {
    return members.map((member, index) => {
      if (index < 3) {
        return (
          <img key={index} className="image" src={ member.image } alt="image"/>   
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

  return (
    <div className="col-4">
      <div className={`item ${activeIndex === activeGroup ? "active" : ""}`}>
        <div className="d-flex my-3">
          <div className="font-weight-bold mx-3 d-flex align-items-center">{ name }</div>
          <button className="btn btn-success btn-sm" onClick={() => setActiveGroup(activeIndex)}>Select</button>
        </div>
        <div className="container-image">{ renderMembers() } { renderRemainder() }</div>
        <div className="border-top px-3 py-2 bg-light">{ description }</div>
      </div>
    </div>
  );
}

export default Group;
