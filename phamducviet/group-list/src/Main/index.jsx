import React from 'react';
 
import './style.css';
import List from './List/List';
import Siderbar from './Siderbar';

function Main() {
   const dataList =[
     {
       group: "Group 1",
       members: [
         {
           name: "lê văn a",
           address: "đà nẵng"
         },
         {
          name: "lê văn a",
          address: "đà nẵng"
        },{
          name: "lê văn a",
          address: "đà nẵng"
        }
       ]
     },
     {
      group: "Group 2",
      members: [
        {
          name: "lê văn b",
          address: "hà nội"
        },
        {
         name: "lê văn b",
         address: "hà nội"
       },{
         name: "lê văn b",
         address: "hà nội"
       }
      ]
    },
    {
      group: "Group 3",
      members: [
        {
          name: "lê văn b",
          address: "hà nội"
        },
        {
         name: "lê văn b",
         address: "hà nội"
       },{
         name: "lê văn b",
         address: "hà nội"
       }
      ]
    }
   ]
  return (
    <div className = "main">
      <Siderbar></Siderbar>
      <List dataList={dataList}></List>
    </div>
  );
}

export default Main;
