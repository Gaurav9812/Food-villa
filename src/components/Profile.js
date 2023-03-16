import { useState } from "react";

const Profile = ({name}) => {

    const [count, setCount] = useState(1);

        return (
            <div>
            <h1>This is A profile component</h1>
            <h2>name: {name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => {
                setCount(count+1);
            }}>Click</button>
            </div>
        )
}

export default Profile;