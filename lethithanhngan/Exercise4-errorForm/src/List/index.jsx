import React,{useState} from 'react';
import './styles.css';
import Item from '../Item';
import Group from '../Group';
import SignUp from '../SignUp';
function List(props) {

  const listStyle={padding:16,};
  const {groupList}=props;
  console.log("List -> groupList", groupList);
  

  //-------Tạo mảng dùng useState
  const [groupActive,setGroupActive] =useState(0);
  const [cartData,setCartData]=useState([]);
  const [errors,setErrors]=useState({
    email:'',
    password:'',
  });
  console.log("List -> cartData", cartData)

  // // viết hàm để thử map
  // function renderTestMap(){
  //   const arr=[{key:'n'},{key:'g'},{key:'a'},{key:'b'}]
  //   const mapData=arr.map((item,index) => {
  //     console.log('Log: :renderTestMap -> item',item);
  //     return item.key;
    
  //   });
  //   console.log('Log: :renderTestMap -> mapData',mapData);
  // }
 
  //-------------------Check Validate
  const checkValidate = (value) =>{
    let errorData={};
    if (!value.email && value.email.length===0){
      errorData ={
        ...errorData,
        email:"Bạn chưa nhập email",
      };
    } else {
      errorData ={
        ...errorData,
        email:'',
      };
    }
    if (!value.password && value.password.length===0){
      errorData={
        ...errorData,
        password:'Bạn chưa nhập mật khẩu',
      };
    } else if(value.password.length < 8){
      errorData={
        ...errorData,
        password:'mật khẩu tối thiểu 8 kí tự',
      };
    } else {
      errorData={
        ...errorData,
        password:'',
      };
    }
    setErrors(errorData);
  }

  // hàm group list
function renderGroupList(){
  return groupList.map((item,groupIndex) =>{
    return ( <Group key={groupIndex} nameG={item.nameG}
      groupData={item}
      members={item.members} 
      description={item.description}
      groupIndex={groupIndex}
      groupActive={groupActive}
      cartData={cartData}
      setGroupActive={setGroupActive}
      setCartData={setCartData}
       />
  )
});
}

// hàm Cart List
function renderCartData(){
  return cartData.map((item,cartIndex) =>{
    return ( <Group key={cartIndex} nameG={item.nameG} 
      members={item.members} 
      description={item.description}
      groupData={item}
      cartIndex={cartIndex}
      groupActive={groupActive}
      cartData={cartData}
      setGroupActive={setGroupActive}
      setCartData={setCartData}
      isCart
       /> )
  });
}

const [finishFormValue, setFinishFormValue] = useState({});
console.log("List -> finishFormValue", finishFormValue)
// sử dụng 1 hàm khác để show ra data mà khi thay đổi trong ô input thì sẽ ko thay đổi dữ liệu ở màn hình hiển thị

 

  return (
    <div className="list-container">
      <div className="cart">
        <h4>Form Result</h4>
        <div>Email: {finishFormValue.email} </div>
        <div>Password: {finishFormValue.inputPassword4} </div>
        <div>Phone Number: {finishFormValue.inputPhone}</div>
        <div>Address:{finishFormValue.inputAddress2} </div>
        <div>Gender:{finishFormValue.inputGender} </div>
        <div className="row">
        {/* {renderCartData()} */}
        </div>
      </div>
      <div style={listStyle}>
        <p> User Form</p>
        <SignUp checkValidate={checkValidate} errors={errors}/>
      </div>
    </div>
  );
}

export default List;
