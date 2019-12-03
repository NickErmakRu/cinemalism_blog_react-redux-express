import React from 'react';
import { Link } from 'react-router-dom';

import './notFound.css';

export class NotFound extends React.Component {
    render() {

        return (
        <div className='text-center notFoundError'>
                <h1>Пост не найден.</h1>
                <h3>К сожалению.</h3>
                <p>Вернуться на <Link to='/'>главную страницу</Link></p>
            </div>
        )
    }
}

export default NotFound
