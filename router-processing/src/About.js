import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
    const [searchParams] = useSearchParams();
    const detail = searchParams.get('detail') === 'true';

    return (
        <div>
            <h1>About</h1>
            {detail && <p>detail 값을 true로 설정하셨군요!</p>}
            {!detail && <p>뒤의 쿼리는 {searchParams}</p>}
        </div>
    );
};

export default About;
