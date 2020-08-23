import React from 'react';
import Lists from './Lists/Lists';
import Sidebar from './Sidebar/Sidebar';


function Main(props) {

  const groupList = [
    {
      name: 'Group1',
      member: [
        {
          user: 'Nguyễn Thị Bích Ni',
          address: 'Quảng Nam'
        },
        {
          user: 'Nguyễn Thị Bích Ni',
          address: 'Quảng Nam'
        },
        {
          user: 'Nguyễn Thị Bích Ni',
          address: 'Quảng Nam'
        },

      ]   
    },
    {
      name: 'Group2',
      member: [
        {
          user: 'Nguyễn Thị Bích Ni',
          address: 'Quảng Nam'
        },
        {
          user: 'Nguyễn Thị Bích Ni',
          address: 'Quảng Nam'
        },
      ]      
    },
    {
        name: 'Group3',
        member: [
          {
            user: 'Nguyễn Thị Bích Ni',
            address: 'Quảng Nam'
          },
          {
            user: 'Nguyễn Thị Bích Ni',
            address: 'Quảng Nam'
          },
        ]  
    }      
  ]

  const groupList2 = [
    {
      name: 'Group 1',
      description: 'asdosando asdpams dmsa asd a',
      members: [
        {
          name: 'Lê Bá Thanh Tuấn',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'ABC',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/50',
        },
      ],
    },
    {
      name: 'Group 2',
      description: 'asdosando asdpams dmsa asd a',
      members: [
        {
          name: 'Lê Bá Thanh Tuấn',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'ABC',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/50',
        },
      ],
    },
    {
      name: 'Group 3',
      description: 'asdosando asdpams dmsa asd a',
      members: [
        {
          name: 'Lê Bá Thanh Tuấn',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'ABC',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/50',
        },
      ],
    }
  ];
  
  return(
    <div className="main">
       <Sidebar/>
       <Lists groupList2={groupList2} />
    </div>
  );
}

export default Main;

