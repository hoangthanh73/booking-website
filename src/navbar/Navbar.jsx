import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem.jsx';
import LightBtn from '../UI/LightBtn.jsx';

import "./Navbar.css";

const Navbar = () => {
    // lấy navBar data tuef file json
    const nav_data = require("./navBar.json");

    // khai báo state lưu giá trị navbar
    const [data, setData] = useState(nav_data);

    // function thay đổi trạng thái active khi click vào các item navbar
    const changeActive = (id) => {
        return setData(prevData => {
            const updateData = prevData.map((el, index) => {
                {
                    if (id === index) {
                        return {
                            "type": el.type,
                            "icon": el.icon,
                            "active": true,
                        }
                    } else {
                        return {
                            "type": el.type,
                            "icon": el.icon,
                            "active": false,
                        }
                    }
                }
            })
            return updateData;
        })
    }

    return (
        <nav id="navbar" >
            <div className='container'>
                <div className='navbar-top'>
                    <Link to="/" className='navbar-top__header'>Booking Website</Link>
                    <div className='navbar-top__action'>
                        <LightBtn>
                            <a href="#">Register</a>
                        </LightBtn>
                        <LightBtn>
                            <a href="#">Login</a>
                        </LightBtn>
                    </div>
                </div>
                <ul className='navbar-bot'>
                    {data.map((element, index) => {
                        return (
                            <NavItem key={index} data={data} item={element} id={index} changeActive={changeActive} />
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;