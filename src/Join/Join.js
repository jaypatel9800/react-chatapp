import React, {useState} from 'react';
import {Link} from "react-router-dom"
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="">
            <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="Room" type="text" value={room} onChange={(e) => setRoom(e.target.value)}/>
            <Link to={`/Chat?name=${name}&room=${room}`}>
            <button onClick={e => (!name || !room) && e.preventDefault() } className="button" type="submit">Sign In</button>
            </Link>
        </div>
    )
}

export default Join
