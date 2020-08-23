import React from 'react';
import Sidebar from '../Sidebar/index';
import List from '../List/index';
import './style.css';

function Main() {
    const dataList = [
        {
            name: 'Group 1',
            members: [
                {
                    name: 'Huỳnh Kim Sơn',
                    address: 'Quảng Nam'
                },
                {
                    name: 'Huỳnh Kim Sơn',
                    address: 'Quảng Nam'
                },
                {
                    name: 'Huỳnh Kim Sơn',
                    address: 'Quảng Nam'
                }
            ]
        },
        {
            name: 'Group 2',
            members: [
                {
                    name: 'Huỳnh Kim Sơn',
                    address: 'Quảng Nam'
                },
                {
                    name: 'Huỳnh Kim Sơn',
                    address: 'Quảng Nam'
                }
            ]
        },
        {
            name: 'Group 3',
            members: [
                {
                    name: 'Huỳnh Kim Sơn',
                    address: 'Quảng Nam'
                }
            ]
        }
    ];

    const dataGroupList = [
        {
            id: 1,
            name: 'Group 1',
            description: 'VN eyes more fruit exports to Japan.',
            members: [
                {
                    name: 'Huỳnh Kim Sơn',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim A',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
            ],
        },
        {
            id: 2,
            name: 'Group 2',
            description: 'VN eyes more fruit exports to Japan.',
            members: [
                {
                    name: 'Huỳnh Kim Sơn',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim A',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
            ],
        },
        {
            id: 3,
            name: 'Group 3',
            description: 'VN eyes more fruit exports to Japan.',
            members: [
                {
                    name: 'Huỳnh Kim Sơn',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim A',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
            ],
        },
        {
            id: 4,
            name: 'Group 4',
            description: 'VN eyes more fruit exports to Japan.',
            members: [
                {
                    name: 'Huỳnh Kim Sơn',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim A',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                }
            ],
        },
        {
            id: 5,
            name: 'Group 5',
            description: 'VN eyes more fruit exports to Japan.',
            members: [
                {
                    name: 'Huỳnh Kim Sơn',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim A',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                }
            ],
        },
        {
            id: 6,
            name: 'Group 6',
            description: 'VN eyes more fruit exports to Japan.',
            members: [
                {
                    name: 'Huỳnh Kim Sơn',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim A',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Huỳnh Kim B',
                    image: 'https://via.placeholder.com/100',
                }
            ],
        }
    ];
    const dataSidebar = [
        {
            menuItemSidebar: 'Iphone/11 Pro/11 Pro Max'
        },
        {
            menuItemSidebar: 'SamSung/Note 9/ S10',
        },
        {
            menuItemSidebar: 'Thu cũ đổi mới',
        },
        {
            menuItemSidebar: 'Mua trả góp',
        }
    ];
    return (
        <div>
            <div className="container-fluid">
                <div className="row main">
                    <div className="col-md-2 sidebar">
                        <Sidebar dataSidebar={dataSidebar} />
                    </div>
                    <div className="col-md-10 list">
                        <List dataList={dataList} dataGroupList={dataGroupList} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;

