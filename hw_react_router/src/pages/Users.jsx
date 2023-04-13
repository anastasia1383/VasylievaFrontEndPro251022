import { Link } from "react-router-dom";
import Api from "../Api";
import { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await Api.getUsers();
            setUsers(data);
        }

        getUsers();
    }, []);

    return <>
        {users.map((user) => <div key={user.phone}>
            <Link to={`users/${user.id}/albums`}>{user.name}</Link>
            </div>)}
    </>
};

export default Users;