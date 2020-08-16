import React from 'react';
import Iteam from './Iteam';
import './style.css';
function list(props) {

  const { dataList } = props;
  // console.log("list -> dataList", dataList)
  
  
    const listContentCss={
      padding: 16,
    }
    function renderTestMap(){
      const arr=[{key: 'a'},{key: 'b'},{key:'c'}];
      const mapData=arr.map((item,index) => {
        console.log("renderTestMap -> item", item);
        return item.key;
      });
      console.log("renderTestMap -> mapData", mapData)
        
    }
    renderTestMap();
    renderTestMap1();
    function renderTestMap1(){
      const arr=[{key: 'a'},{key: 'b'},{key:'c'}];
      const mapData=arr.map((item,index) => {
        console.log("renderTestMap1 -> item", item);
        return {key: item};
      });
      console.log("list -> mapData", mapData)

    }
    
    const renderTestMap2 = () =>{
      const mapData = dataList.map((item,index)=>{
        return <Iteam key={index} color = {item.color} name= {item.name} />;
      });
      return mapData;
    }

  return (
    <div className="list-container">
      <div style={listContentCss}>
        <h3>lisst</h3>
        <div className="row">
          {renderTestMap2()}
          {/* <Iteam color={dataList[0].color} name={dataList[0].name} />
          <Iteam color={dataList[1].color} name={dataList[1].name} />
          <Iteam color={dataList[2].color} name={dataList[2].name} /> */}

          
        </div>
        
      </div>
    </div>
    
  );
}

export default list;