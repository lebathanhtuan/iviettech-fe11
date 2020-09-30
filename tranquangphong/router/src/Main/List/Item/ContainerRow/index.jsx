import React from 'react';
import './styles.css';

function ContainerRow(props) {
  const { nameItem, colorItem } = props;
  console.log("ContainerRow -> colorItem", colorItem)
  console.log("ContainerRow -> nameItem", nameItem)

  return (
    <div className="container-row-item">
      <div>
        <div className="child-item" style={{backgroundColor: colorItem}}></div>
        <p className="child-item-title">{nameItem}</p>
      </div>
      <div>
        <div className="child-item" style={{backgroundColor: colorItem}}></div>
        <p className="child-item-title">{nameItem}</p>
      </div>
      <div>
        <div className="child-item" style={{backgroundColor: colorItem}}></div>
        <p className="child-item-title">{nameItem}</p>
      </div>
      <div>
        <div className="child-item" style={{backgroundColor: colorItem}}></div>
        <p className="child-item-title">{nameItem}</p>
      </div>  
    </div>
  );
}

export default ContainerRow;
