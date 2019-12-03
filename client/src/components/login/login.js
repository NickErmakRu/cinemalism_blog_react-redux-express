import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { loginUser } from "../../store/actions/authActions";
import { clearError } from "../../store/actions/errorActions";

import './login.css';

export class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    componentDidUpdate() {
        if (this.props.user) {
            this.props.history.push('/');
        }
    }

    componentDidMount() {
        this.props.clearError();
        if (this.props.user) {
            this.props.history.push('/');
        }
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value} )
    }

    onSubmit = e => {
        e.preventDefault();

        this.props.loginUser(this.state);
    }

    render() {
        const { errors } = this.props;

        return (
            <div className='row'>
                <form className='card p-3 mx-auto col-md-6' onSubmit={ this.onSubmit }>
                    <h2>Вход</h2>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.email}
                            onChange={this.onChange}
                            name='email'/>

                        {errors.name && (<div className='text-danger'>{errors.name}</div> )}
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Пароль</label>
                        <input
                            type='password'
                            className='form-control'
                            value={this.state.password}
                            onChange={this.onChange}
                            name='password'/>

                        {errors.password && (<div className='text-danger'>{errors.password}</div> )}
                    </div>

                    <button type='submit' className='btn btn-primary btn-lg'>Войти</button>

                    <Link className='btn btn-info btn-md btn-register' to='/register'>Регистрация</Link>

                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    errors: state.errorReducer
})

export default connect(mapStateToProps, { loginUser, clearError })(Login);
