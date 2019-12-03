import React from 'react';
import { connect } from 'react-redux';

import { registerUser } from "../../store/actions/authActions";
import { clearError } from "../../store/actions/errorActions";

import './register.css'

export class Register extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        role: null
    }

    componentDidUpdate() {
        if (this.props.user && this.props.user.role !== 'admin') {
            this.props.history.push('/');
        }
    }

    componentDidMount() {
        this.props.clearError();
        if (this.props.user && this.props.user.role !== 'admin') {
            this.props.history.push('/');
        }
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value} )
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.registerUser(this.state);
    }

    render() {
        const { errors, user } = this.props;

        return (
            <div className='row'>
                <form className='card p-3 mx-auto col-md-6' onSubmit={ this.onSubmit }>
                    <h3>Регистрация</h3>

                    <div className='form-group'>
                        <label htmlFor='name'>Логин</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.name}
                            onChange={this.onChange}
                            name='name'/>

                        {errors.name && (<div className='text-danger'>{errors.name}</div> )}
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className='form-control'
                            value={this.state.email}
                            onChange={this.onChange}
                            name='email'/>

                        {errors.email && (<div className='text-danger'>{errors.email}</div> )}
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Пароль</label>
                        <input
                            type='password'
                            className='form-control'
                            value={this.state.password}
                            onChange={this.onChange}
                            name='password'/>
                    </div>

                    { user ? (
                        <div>
                            { user.role === 'admin' ? (
                                <div className='form-group'>
                                    <label htmlFor='password'>Роль в системе</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        value={this.state.role}
                                        onChange={this.onChange}
                                        name='role'/>
                                </div>
                            ) : ( null )}
                        </div>
                    ) : ( null )}


                    <button type='submit' className='btn btn-primary btn-md'>Зарегистрироваться</button>
                    {errors.message && (<div className='text-danger'>{errors.message}</div> )}

                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    errors: state.errorReducer
})

export default connect(mapStateToProps, { registerUser, clearError })(Register);
