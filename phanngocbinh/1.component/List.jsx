import React from 'react';
import './styte.css';
import Item from './Item.jsx';
function List() {

// 1.List Name
//   let name_= ['Lê Bá Thanh Tuấn', 'Nguyễn Văn A', 'Trần Văn B', 'Lê Thị C'];
//   let address_ =['iVietTech', 'Đà Nẵng', 'Hà Nội', 'Hồ Chí Minh'];
//   return (
//      <div>
//         <h3>List user</h3>

//          <div>
//             <Item name= {name_[0]} address = {address_[0]}/>
//             <Item name= {name_[1]} address = {address_[1]}/>
//             <Item name= {name_[2]} address = {address_[2]}/>
//             <Item name= {name_[2]} address = {address_[3]}/>
//          </div>
//      </div>
    
//   );
const divStyle = {
   width: '70%',
}
return(
   
      <div className="container">
         <div className="row">
            <Item color='yellow' />
            <Item color='red' />
            <Item color='black' />
            <Item color='blue' />
         </div>
      </div>
 
);
}
export default List;
