import React, {useEffect, useState} from 'react';
import './UserData.css';

function Userdata() {
    const [userData, setUserData] = useState(null);

    useEffect(() =>{
        fetch('https://fakestoreapi.com/users/8')
            .then(res=>res.json())
            .then((data) => setUserData(data));
    }, []);

    return (
        <div>
      {userData ? (
        <div class="circle">
          <p>{userData.name.firstname[0].toUpperCase()}{userData.name.lastname[0].toUpperCase()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    );
}

export default Userdata;