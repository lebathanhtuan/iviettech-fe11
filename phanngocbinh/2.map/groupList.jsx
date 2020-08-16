import React from 'react';
import './styte.css';
function Group(props) {
let {name, members,description }=props;
var a=0;
function rederMembers(){
         return members.map((item, index)=>{
            if(index<3){
               return(
                  <img className="m-2" style={{borderRadius: "50%", width:'60px', backgroundImage:'black'}} src={item.image} alt=""/>  
                 ) 
            }else{
               a++;
               return null;
            }
         })
}
return(
   <div className="col-md-4 " >
      <div className="row group-shadow" style={{border:'1px solid rgb(54, 54, 54)', margin: '5px'}}>
         <div className="col-md-12" style={{background:'#ccc', height:'40px',lineHeight:'40px', fontSize:'20px', fontWeight:'500', }}>{name}</div>
         <div className="col-md-12">
            <div className="row">
               <div>{rederMembers()}</div>
               {(a===0)?'':<div className="m-2"  style={{width:'60px', height:'60px', background:'rgb(54, 54, 54)', color:'white',borderRadius: '50%', display:'flex', justifyContent:'center', lineHeight:'60px' }}>+{a}</div>}
            </div>   
         </div>
         <div className="col-md-12" style={{borderTop:'1px solid #ccc', height:'40px',lineHeight:'40px',fontSize:'16px' }}>{description}</div>
      </div>
   </div>
)}
export default Group;
