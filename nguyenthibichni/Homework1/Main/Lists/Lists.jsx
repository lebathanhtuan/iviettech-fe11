import React from 'react';
import '../Main.css';
import Items from './Items';
import Card from '../BT_Bootstrap/Card'

function List(props) {

  const listContentCss = {
    padding: 16,
  }

  return(
    <div className="list-container">
        <div style={listContentCss}>
            <h3>List User</h3>
            <div className="row">
              <Card active color="#ff33ff"/>
              <Card color="#ff8533"/>
              <Card color="#1aff1a"/>
              <Card color="#00bfff"/>
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