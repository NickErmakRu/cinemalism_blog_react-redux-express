import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getPost, deletePost } from "../../store/actions/postActions";
import Spinner from "../spinner/spinner";

import './postPage.css'

export class PostPage extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPost(id);
    }

    onClick = e => {
        e.preventDefault();
        this.props.deletePost(this.props.match.params.id, this.props.history);
    }

    render() {
        const { post, user } = this.props;

        if (!post) {
            return <Spinner />
        }

        return (
            <div className='postBody'>
                <h1>«{post.title}»</h1>
                <div className='bodyImageDiv'>
                    <img src={ post.newBodyPath } alt="postImg" className='bodyImage' />
                </div>
                <p className='textWidth'>{post.mainText}</p>

                {user && user.role === 'admin' ? (
                    <div className='adminBtns'>
                        <button onClick={this.onClick} className='btn btn-danger mr-2'>Удалить</button>
                        <Link className='btn btn-warning mr-2' to={`/update/${post.id}`}>Редактировать</Link>
                    </div>
                ) : null }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.postReducer.post,
    user: state.authReducer.user
})

export default connect(mapStateToProps, { getPost, deletePost })(PostPage)
