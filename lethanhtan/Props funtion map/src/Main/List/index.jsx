import React from 'react';

import '../main.css';
import Item from '../Item'

function List(props) {
  const { datalist } = props;
  console.log(datalist)
  function renderMap() {
    const array = ['a', 'b', 'c', 'd'];
    const myData = array.map((item, index) => {
      return item;
      // lấy 1 phần tử bất kì dùng find
    });
    console.log(myData);
  }



  function renderMapTest() {
    const array1 = [{ key: '1' }, { key: '2' }, { key: '3' }];
    const myData1 = array1.map((item, index) => {
      return item.key
    })
    console.log(myData1);
  }



  function renderMapTest1() {
    const array = ['a', 'b', 'c', 'd'];
    const myData1 = array.map((item, index) => {
      return { key: item }
    })
    console.log(myData1);
  }
  renderMapTest1();


  renderMapTest();
  console.log(renderMap())
  const arrowFunction = () => {
    return {
      key: 'hihi'
    }
  }
  console.log(arrowFunction());

  // [].map(()=>{});

  function renderItem1(){
      return datalist.map((item,index)=>{
        console.log(item);
        return(
          // có map là phải có key
          <Item key={index} color={item.color} name ={item.name} active={[1,5].includes(index)}/>
        )
      })
     
  }



  // function renderItem() {
  //   return (

  //     // thẻ trống để nhiệm vụ để không bị lỗi khi cùng bật
  //     <>
  //       <Item color={datalist[0].color} name={datalist[0].name} />
  //       <Item color={datalist[1].color} name={datalist[1].name} />
  //       <Item color={datalist[2].color} name={datalist[2].name} />
  //       <Item color={datalist[3].color} name={datalist[3].name} />
  //     </>
  //   );
  // }
  return (
    <div className="item1 row   ">
      {/* map(item,index)  item dđại diện của mảng , index làvị trí thứ bn của mảng*/}
      {/* <Item   color={datalist[0].color} name={datalist[0].name}/>
            <Item   color={datalist[1].color} name={datalist[1].name}/>
            <Item   color={datalist[2].color} name={datalist[2].name}/>
            <Item   color={datalist[3].color} name={datalist[3].name}/> */}
      {/* <Item name="Lê thanh tân" adrees="1123" />
            <Item name="Lê thanh tân" adrees="1123" />
            <Item name="Lê thanh tân1" adrees="1123" />
            <Item name="Lê thanh tân2" adrees="1123" /> */}
      {renderItem1()}
      <p>ABC</p>
    </div>
  );
}

export default List;
