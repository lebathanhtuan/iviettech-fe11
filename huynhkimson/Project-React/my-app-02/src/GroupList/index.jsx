import React, { useState } from 'react';
import './style.css';

function GroupList(props) {
    const { name,
        description,
        members,
        grouplistIndex,
        activeIndex,
        setGrouplistActiveIndex,
        cartData,
        setCartdata,
        groupListData,
        isCard
    } = props;
    const [count, setCount] = useState(1);

    const handelSelectCart = () => {
        setGrouplistActiveIndex(grouplistIndex);
        const cartDataSelectIndex = cartData.findIndex((data) => data.id === groupListData.id);
        if (cartDataSelectIndex === -1) {
            setCartdata([
                ...cartData,
                groupListData,
            ]);
        }
    }

    const handelDeleteCart = () => {
        const cartDataDeleteIndex = cartData.findIndex((data) => data.id === groupListData.id);
        if (cartDataDeleteIndex !== -1) {
            const newCartData = cartData;
            cartData.splice(cartDataDeleteIndex, 1);
            setCartdata([
                ...newCartData,
            ]);
        }
    }

    function renderMembersGroup() {
        return members.map((member, index) => {
            if (index < 3) {
                return (
                    <img key={index} className="image-children p-2 " src={member.image} alt="image" />
                );
            } else {
                return null;
            }
        });
    };
    function renderSurplus() {
        const Surplus = members.length - 3
        if (Surplus > 0) {
            return (
                <div className="surplus">
                    <div className="number-surplus">+{Surplus}</div>
                </div>
            )
        }
    };
    return (
        <div className={` col-md-3 item-group ${activeIndex === grouplistIndex ? 'item-group-active' : ''}`} >
            <div className="item-name-group">{name} - {count}
                <button className="btn btn-primary ml-2" onClick={() => setCount(count + 1)}>+</button>
                <button className="btn btn-primary ml-2" onClick={() => {
                    if (count > 0)
                        return setCount(count - 1)
                }}>
                    -</button>
                {isCard
                    ? (
                        <button className="btn btn-primary ml-2"
                            onClick={() => handelSelectCart()}>
                            Select</button>
                    )
                    : (
                        < button className="btn btn-danger ml-2"
                            onClick={() => handelDeleteCart()}>
                            Delete</button>
                    )
                }
            </div>
            <div className="image ">{renderMembersGroup()} {renderSurplus()} </div>
            <div className=" item-description border-top">{description}</div>
        </div >
    );
}
export default GroupList;