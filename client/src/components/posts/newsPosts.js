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
                <Spinner />
            )
        }

        return (
            <div className='posts-list'>
                { posts.map(post => {
                    if (post.tags.includes('новости')) {
                        return <Post key={post.id} post={post}/>
                    }
                })}
            </div>
        )
    }
}

const mapStateToPropsNews = state => ({
    posts: state.postReducer.posts
})

const NewsPosts = connect(mapStateToPropsNews, { getPosts })(Posts)


export {
    NewsPosts
}
