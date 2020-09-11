import React from 'react';
import './styles.css';
import ContainerRow from './ContainerRow';

function Item(props) {
  const { name, color, active } = props;

  const styleItem = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 8,
    height: 300,
    backgroundColor: color
  }

  const styleContent = {
    padding: 12,
    textAlign: 'center'
  }

  const containerRowData = [
    {
      nameItem: 'Teo',
      colorItem: 'red'
    },
    {
      nameItem: 'Tom',
      colorItem: 'green'
    },
    {
      nameItem: 'Ty',
      colorItem: 'orange'
    },
    {
      nameItem: 'Tit',
      colorItem: 'yellow'
    },
  ];

  const containerRowMap = () => {
    return containerRowData.map((item, index) => {
      return (
        <ContainerRow key={index} nameItem={item.nameItem} colorItem={item.colorItem} />
      );
    });
  };
  
  return (
    <div className="col-3 py-3" >
      <div className={`${active ? 'item-active' : ''} item`}>
        <div style={styleItem}>
          {containerRowMap()}
        </div>

        <div style={styleContent}>{name}</div>
      </div>
    </div>
  );
}

export default Item;
