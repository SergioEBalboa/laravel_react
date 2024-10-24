import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';
import { useUsers } from "./useUsers";

export default function Main() {
    const users = useUsers();

    useEffect(() => {
        users.fillUsers()
    }, []);

    return (
        <div>
            <button className="btn-1" onClick={users.reducir}>-</button>
            <b style={{padding: '0px 10px'}}>{users.number}</b>
            <button className="btn-1" onClick={users.aumentar}>+</button>
        </div>
    )
}

const main = document.getElementById('main-users');

if (main) {
    if(!main.root) { main.root = createRoot(main); }
    main.root.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    );
}
