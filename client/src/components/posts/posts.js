import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from "../../store/actions/postActions";
import Spinner from "../spinner/spinner";
import Post from '../post/post'

import './posts.css'

class Posts extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props;

        if (!posts) {
            return (
                <Spinner className='testClass' />
            )
        }

        return (
            <div className='posts-list'>
                {posts.map(post => {
                    return <Post key={post.id} post={post}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.postReducer.posts
})

const AllPosts = connect(mapStateToProps, { getPosts })(Posts)

export {
    AllPosts
}
