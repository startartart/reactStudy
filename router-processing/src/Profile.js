import React from 'react';
import {useParams} from 'react-router-dom';

const profileData = {
    pbg: {
        name: '박병권',
        description: '풀스택 희망자'
    },
    mkboy: {
        name: '엠케이',
        description: '게임 개발자'
    }
};

const Profile = () => {
    const {username} = useParams();
    console.log(username);
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
