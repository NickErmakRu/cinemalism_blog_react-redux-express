import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import './navBar.css';

export class NavBar extends React.Component {

    render() {

        const {user} = this.props;

        return (
            <div className='divHeader'>
                { user ? (
                    <div>
                    <header className='blog-header row'>
                        <Link className='logo text-dark' to='/'>cinemalism</Link>
                        <div className='blog-pages'>
                            <Link className='text-dark barLink' to='/movies'>кино</Link>
                            <Link className='text-dark barLink' to='/tv-series'>сериалы</Link>
                            <Link className='text-dark barLink' to='/reviews'>рецензии</Link>
                            <Link className='text-dark barLink' to='/news'>новости</Link>
                            <div className='vertLine  barLink'></div>
                            <Link className='text-dark userName  barLink' to='/'>{user.name || user.user.name}</Link>
                            <Link className='btn btn-warning btn-sm  barLink' to='/logout'>Выход</Link>
                        </div>
                    </header>
                        <div className='subLogo'>good films make your life better</div>

                    { user.role === 'admin' ? (
                            <header className='adminHeader'>
                                <Link className='btn btn-info btn-sm newPost' to='/new_post'>добавить статью</Link>
                                <Link className='btn btn-info btn-sm newPost' to='/register'>зарегать админа</Link>
                            </header>
                        ) : (
                            null
                        )}
                    </div>
                ) : (
                    <div>
                        <header className='blog-header row'>
                            <Link className='logo text-dark' to='/'>cinemalism</Link>
                            <div className='blog-pages'>
                                <Link className='text-dark' to='/movies'>кино</Link>
                                <Link className='text-dark' to='/tv-series'>сериалы</Link>
                                <Link className='text-dark' to='/reviews'>рецензии</Link>
                                <Link className='text-dark' to='/news'>новости</Link>
                                <div className='vertLine'></div>
                                <Link className='btn btn-success btn-sm' to='/login'>Войти</Link>
                            </div>
                        </header>
                        <div className='subLogo'>good films make your life better</div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user
})

export default connect(mapStateToProps)(NavBar);
