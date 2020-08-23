import React from 'react';
import './style.css'


function Group(props) {
    const {
      groupListData,
      Group,
      members,
      description,
      groupIndex,
      groupData,
      cartData,
      setCartData,
      setGroupData,
      isDelete,
    }  = props;
    console.log('Log: : Group -> groupListData', groupListData);
   
    const renderMembers = () => {
        return members.map((member, index) => {
          const renderImage = () => {
            if(index<3){
              return   <img key={index} className='p-1 image ' src={member.image} alt=""></img>          
            }
            else return null;
          }
          return renderImage();
        });
    }
    //hiển thị ảnh
    const renderImages = () => {
      if(members.length>3){
        return(
          <>
            {renderMembers()}
            <div className='p-1 imageNull '><span>+{members.length-3}</span></div>
          </>
        );
      }
      else return(
        renderMembers()
      );
    }
    //thêm phần tử trong grouplist dựa vào id khi click vào cartdata
    const handleSelectGroup =() => {
      const cartIndex = cartData.findIndex((data) => data.id === groupListData.id );

      if(cartIndex === -1){
        setGroupData(groupIndex);
        console.log('Log: : handleSelectGroup -> setGroupData', setGroupData);
        setCartData([
          ...cartData,
          groupListData,
        ]);
      };
    }
    //xoá item bằng btn delete
    const handleDeleteGroup = () => {
      const cartIndex = cartData.findIndex((data) => data.id === groupListData.id );
      
      cartData.splice(cartIndex,1);
      setCartData([
        ...cartData,
        
      ]);
     
    }
  const selectOrDelete = () => {
    if(isDelete) return (
      <button className='ml-1 btn btn-danger'  
        onClick={() => handleDeleteGroup()}
        >
          Delete
        </button>);
    else return (
      <button className='ml-1 btn btn-primary'  
        onClick={() => handleSelectGroup()}
        >
          Select
        </button>);
  }
  
  return (
    <div className={`item ${groupIndex===groupData? "item-active" : ""}`}> 
        
        <div className="p-2 group"  >
          {Group} 
          {selectOrDelete()}
        </div>
        <div className=' images'>
          {renderImages()}
        </div>
        <div className='p-1 border-top '>{description}</div>
    </div>
    
    );
    
}

export default Group;
