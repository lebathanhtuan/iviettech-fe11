import React from 'react';
import '../Main.css';
import Items from './Items';
import Card from '../BT_Bootstrap/Card';


function List(props) {
  const {dataList} = props;
  const listContentCss = {
    padding: 16,
  }

  return(
    <div className="list-container">
        <div style={listContentCss}>
            <h3>List User</h3>
            <div className="row">
              <Card color={dataList[0].color} name={dataList[0].name}/>
              <Card color={dataList[1].color} name={dataList[1].name}/>
              <Card color={dataList[2].color} name={dataList[2].name}/>
              <Card color={dataList[3].color} name={dataList[3].name}/>
            </div>
        </div>
    </div>
  );
}

export default List;
//<Items name="Bích Ni" adr="USA" active/>
        //<Items name="Thanh Ngân" adr="Canada" />
        //<Items name="Qúy Thương" adr="Singapore" />
        //<Items name="Minh Nguyệt" adr="Italy"/>