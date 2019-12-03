import React from 'react';
import { connect } from 'react-redux'

import { updatePost, getPost } from '../../store/actions/postActions'

import { UploadConst } from '../addNewPost/uploadConst'
import Spinner from '../spinner/spinner'

import './updatePost.css'

export class UpdatePost extends React.Component {

    constructor(props) {
        super(props);

        this.titleInput = React.createRef();
        this.shortTextInput = React.createRef();
        this.mainTextInput = React.createRef();
        this.newPathInput = React.createRef();
        this.newBodyPathInput = React.createRef();
        this.tagsInput = React.createRef();
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPost(id)
    }

    onSubmitForm = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        this.props.updatePost(id, {
            title: this.titleInput.current.value,
            shortText: this.shortTextInput.current.value,
            mainText: this.mainTextInput.current.value,
            newPath: this.newPathInput.current.value,
            newBodyPath: this.newBodyPathInput.current.value,
            tags: this.tagsInput.current.value
        }, this.props.history);
    }

    render() {
        const {post, user} = this.props;

        if (!post) {
            return <Spinner />
        }

        return (
            <div>
                { user ? (
                    <div>
                        { user.role === 'admin' ? (
                            <div>
                            <UploadConst />
                            <form onSubmit={this.onSubmitForm}>
                                <div className='form-group'>

                                    <label htmlFor='title'>Заголовок</label>
                                    <input ref={this.titleInput} type='text' defaultValue={post.title} name='title'
                                           className='form-control'/>

                                    <label htmlFor='mainText'>Содержание</label>
                                    <input ref={this.mainTextInput} type='text' defaultValue={post.mainText} name='mainText'
                                           className='form-control'/>

                                    <label htmlFor='newPath'>Обложка</label>
                                    <input ref={this.newPathInput} type='text'
                                           defaultValue={post.newPath.substr(8, post.newPath.length - 1)} name='newPath'
                                           className='form-control'/>

                                    <label htmlFor='newBodyPath'>Изображение для статьи</label>
                                    <input ref={this.newBodyPathInput} type='text'
                                           defaultValue={post.newBodyPath.substr(8, post.newBodyPath.length - 1)} name='newBodyPath'
                                           className='form-control'/>

                                    <label htmlFor='tags'>Теги</label>
                                    <input ref={this.tagsInput} type='text' defaultValue={post.tags} name='tags'
                                           className='form-control'/>

                                    <label htmlFor='shortText'>Описание</label>
                                    <input ref={this.shortTextInput} type='text' defaultValue={post.shortText} name='shortText'
                                           className='form-control'/>

                                    <button type='submit' className='btn btn-primary btnSavePost'>Сохранить</button>
                                </div>
                            </form>
                            </div>
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
    post: state.postReducer.post,
    user: state.authReducer.user
})

export default connect(mapStateToProps, { updatePost, getPost })(UpdatePost)
