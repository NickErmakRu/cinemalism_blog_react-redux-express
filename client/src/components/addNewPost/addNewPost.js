import React from 'react';
import { connect } from 'react-redux'

import { addPost } from '../../store/actions/postActions'
import { UploadConst } from './uploadConst'

import './addNewPost.css'

export class AddNewPost extends React.Component {
    state = {
        title: '',
        mainText: '',
        coverImage: '',
        bodyImage: '',
        tags: '',
        shortText: ''
    }

    onChange = e => {
            this.setState({[e.target.name] : e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addPost(this.state, this.props.history);
    }

    render() {
        const {title, mainText, coverImage, bodyImage, tags, shortText} = this.state;
        const {user} = this.props;

        return (

            <div>
                { user ? (
                    <div>
                        { user.role === 'admin' ? (
                            <form onSubmit={this.onSubmit}>
                                <div className='form-group'>

                                    <label htmlFor='title'>Заголовок</label>
                                    <input type='text' value={title} onChange={this.onChange} name='title'
                                           className='form-control'/>

                                    {/*<label htmlFor='mainText'>Содержание</label>*/}
                                    {/*<input type='text' value={mainText} onChange={this.onChange} name='mainText'*/}
                                    {/*       className='form-control'/>*/}

                                    <div className="form-group">
                                        <label htmlFor="mainText">Example textarea</label>
                                        <textarea value={mainText} onChange={this.onChange} name='mainText' className="form-control" id="exampleFormControlTextarea1"
                                                  rows="3" />
                                    </div>

                                    <label htmlFor='coverImage'>Обложка</label>
                                    <input type='text' value={coverImage} onChange={this.onChange} name='coverImage'
                                           className='form-control'/>

                                    <label htmlFor='coverImage'>Изображение для статьи</label>
                                    <input type='text' value={bodyImage} onChange={this.onChange} name='bodyImage'
                                           className='form-control'/>

                                    <UploadConst/>

                                    <label htmlFor='tags'>Теги</label>
                                    <input type='text' value={tags} onChange={this.onChange} name='tags'
                                           className='form-control'/>

                                    <label htmlFor='shortText'>Описание</label>
                                    <input type='text' value={shortText} onChange={this.onChange} name='shortText'
                                           className='form-control'/>

                                    <button type='submit' className='btn btn-primary btnAddPost'>Опубликовать</button>
                                </div>
                            </form>
                        ) : (
                            <div className='messageToUser'>Зайдите как администратор</div>
                        )}
                    </div>
                    ) : (
                    <div className='messageToUser'>Зайдите как администратор</div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user
})

export default connect(mapStateToProps, {addPost})(AddNewPost)
