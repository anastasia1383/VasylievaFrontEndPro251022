import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../Api";

export const Users = () => {
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
            <div className="flex">
                <h1>
                    {user.name}
                </h1>
                <Link to={`users/${user.id}/albums`}>
                    <button>See albums</button></Link>
            </div>
        </div>
        )}
    </>
};