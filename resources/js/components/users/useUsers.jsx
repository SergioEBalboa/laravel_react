import { useState } from "react";
import axios from "axios";

export const useUsers = () => {
    const [number, setNumber] = useState(0);
    const [users, setUsers] = useState([]);

    const aumentar = () => {
        setNumber(prev => Math.min(100000, (prev + 1)));
    }
    const reducir = () => {
        setNumber(prev => Math.max(0, (prev - 1)));
    }

    const fillUsers = async () => {
        let res = await axios.get('api/get_users', {
            withCredentials: true
        });
        setUsers(res.data);
    }

    return {
        number,
        aumentar,
        reducir,
        users,
        fillUsers
    };
}
