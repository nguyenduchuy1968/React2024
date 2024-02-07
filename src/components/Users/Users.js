import React, {useEffect, useState} from 'react';
import User from "../User/User";
import axios from "axios";
import {axiosService} from '../../services/axiosService'
import{urls} from "../../constants/urls";
import {userService} from "../../services/userService";
import UserDetails from "../UserDetails/UserDetails";
import css from './Users.module.css'

const Users = () => {
    const [users, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        userService.getAll()
            // .then(res => res.data)
            // .then(users => setUsers(users))
            .then(({ data }) => setUsers(data))
    }, []);
    // console.log(users)

    const getCurrentUser = (user) => {setUserDetails(user)}

    return (
        <div className={css.Users}>
            <div>
            {users.map(user => <User key={user.id} user={user} getCurrentUser={getCurrentUser} />)}
            </div>
            <hr />
            <div>{userDetails && <UserDetails userDetails={userDetails} />}</div>
            
        </div>
    );
};

export default Users;