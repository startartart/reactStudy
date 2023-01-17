import React from 'react';
import {useParams,Link} from 'react-router-dom';

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

const TestProfile = () => {
    const username = useParams();
    const profile = profileData[username.username];
    const rootProfile = profileData[username.username] || username.username ? false : true;

    return (
        <div>
          <h3>유저 목록:</h3>
          <ul>
            <li>
              <Link to="/profile/pbg">pbg</Link>
            </li>
            <li>
              <Link to="/profile/mkboy">mkboy</Link>
            </li>
          </ul>
          
          {profile ? (
            <div>
                <h3>
                    {username.username} ({profile.name})
                </h3>
                <p>{profile.description}</p>
            </div>
            ) : (
                rootProfile ? (
                    <div>유저를 선택해주세요.</div>
                ) : (
                    <div>존재하지 않는 유저입니다.</div>
                )
            )}
        </div>
      );
};

export default TestProfile;
