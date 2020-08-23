import React, {useState} from 'react';
import './styles.css';


function Group(props) {
   const {nameG, members, description}=props;
   const {groupActive, setGroupActive, groupIndex, groupData } =props;
   const {cartData, setCartData, isCart} =props;
   const [countValue,setCountValue] =useState(1);
 
  function renderMembers(){
      return members.map((member,index) =>{
        if(index<3){
          return(
            <img src={member.image} className="number" />
          );
        }else{
          return null;
        }
    });
    
  };
  function condition(){
    const obj = members.length - 3;
    if(obj>0){
      return(
        <div className="obj">
          <div className="obj-plus">+{obj}</div>
        </div>
      )
    }
};
  // hàm thêm dữ liệu
  const handleSelect=() =>{
    setGroupActive(groupIndex);
    const cartIndex = cartData.findIndex((data)=> data.nameG === groupData.nameG);
   
    
    if(cartIndex === -1){
      setCartData([
        ...cartData,
        groupData,
      ]);
     
    }
    console.log("handleSelect -> cartIndex", cartIndex)
  }
  // Hàm xóa dữ liệu
  const handleDelete =() =>{
    setGroupActive(groupIndex);
    const cartIndexDelete = cartData.findIndex((data)=> data.nameG === groupData.nameG);

    if(cartIndexDelete !== -1){
      const newCart = cartData; // tạo ra 1 mảng giống mảng cũ thì lúc này mới cắt 1 phần mà bên trong vẫn còn 
      console.log("handleDelete -> newCart", newCart)
      newCart.splice(cartIndexDelete,1);
      setCartData([
        ...newCart,
      ]);
    }
  }

  return (
    
    <div className={`col-md-4 group ${groupActive === groupIndex ? 'group-active' :''}`}
        
        > 
        <div className="name-group">{nameG}- {countValue}
          <div className="btn">
            <button className="ml-1 btn btn-primary" onClick={() => setCountValue(countValue+1)}>+</button>
            <button className="ml-1 btn btn-primary" onClick={() =>countValue <0 ? ' ': setCountValue(countValue-1)}>-</button>
            {isCart
              ? (<button className="ml-1 btn btn-info" onClick={() =>  handleDelete()} >Delete</button>)
              :  <button className="ml-1 btn btn-primary" onClick={() =>  handleSelect()} >Select</button>
            }
          </div>
        </div>

        <div className="border-top groups">
        {renderMembers()} {condition()}
        </div>
  <div className="border-top">{description}</div>
    </div>
    
  );
}

export default Group;
