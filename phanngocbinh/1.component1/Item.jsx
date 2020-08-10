import React from 'react';
import './styte.css';
function Item(props) {
let color = props.color;
// 1.Item Name
//    let name_ =props.name;
//    let address_ = props.address;
//   return (
//      <p className="item">
//         {name_} - {address_}
//      </p>
    
//   );

const colorBorder = {
   margin: '15px',
   border: '1px solid black',
}
const colorBackground ={
   height: '200px',
   background : color,
}

return(
   <div className="col-md-3">

      <div className="row" style={colorBorder}>
         <div className="col-md-12" style={colorBackground} />
         <div className="col-md-12">
            {color}
         </div>
      </div>
         
      </div>

);

}

export default Item;
