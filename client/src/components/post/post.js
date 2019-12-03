import React from 'react'
import { Link } from "react-router-dom";

import './post.css'

export class Post extends React.Component {

    shortText = text => text.substr(0, 100) + '...'

    render() {
        const { post } = this.props;

        return (
            <div className="card postCard">
                <img className="card-img-top cardCover" src={ post.newPath } alt="cardCover" />
                {/*<div className='card-mg-top'>{ post.newPath }</div>*/}
                    <div className="card-body">
                        <h5 className="card-title">«{ post.title }»</h5>
                        <div className='optionInfo'>
                            <div className='postTags'>
                            { post.tags.map((tag) => {
                                return (
                                    <p className="card-text tags">{ tag }</p>
                                )
                            })}
                            </div>
                            <p className="card-text">{ this.shortText(post.shortText) }</p>
                        </div>
                        <Link to={`/post/${post.id}`} className="btn btn-primary readMore">Читать</Link>
                    </div>
            </div>
        )

    }
}

export default Post
