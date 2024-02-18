import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {userService} from "../services";
import {UserDetails} from "../components";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)
    const {id} = useParams()

    useEffect(() =>{
        userService.byId(id).then(({data}) => setUserDetails(data))
    }, [id])

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <hr />
            <Outlet />
        </div>
    );
};

export {UserDetailsPage};