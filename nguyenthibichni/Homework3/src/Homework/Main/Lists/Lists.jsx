import React from 'react';
import '../Main.css';
import Items from './Items';
import Card from '../BT_Bootstrap/Card';


function List(props) {
  const { dataList } = props;
  const listContentCss = {
    padding: 16,
  }

  function renderTestMap1() {
    const arr = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]
    const mapData = arr.map((item, index) => {
      console.log('Test1',item)
      return item.key;
    })
  }

  function renderTestMap2() {
    const arr = ['a','b','c','d']
    const mapData = arr.map((item, index) => {
      console.log('Test2',item)
      return {key: item};
    })
  }

  function renderTestMap3() {
    return dataList.map((item, index) => {
      console.log('Test3',item)
      return(
        <Card key={index} color={item.color} name={item.name}/>
      )
    })
  }


  function renderItems() {
    renderTestMap1();
    renderTestMap2();
    return (
      <>
        {renderTestMap3()}
      </>
    );
  }
  return (

    <div className="list-container">
      <div style={listContentCss}>
        <h3>List User</h3>
        <div className="row">
          {renderItems()};
          </div>
      </div>
    </div>
  )

}

export default List;
//<Items name="Bích Ni" adr="USA" active/>
        //<Items name="Thanh Ngân" adr="Canada" />
        //<Items name="Qúy Thương" adr="Singapore" />
        //<Items name="Minh Nguyệt" adr="Italy"/>