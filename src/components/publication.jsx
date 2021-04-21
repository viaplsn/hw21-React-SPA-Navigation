import React from 'react';
import {ReactComponent as VeridiedLogo} from '../assets/images/verified-icon.svg';
import {ReactComponent as NavigateArrow} from '../assets/images/navigate-arrow.svg';
import {ReactComponent as Like} from '../assets/images/like.svg';
import {ReactComponent as Comment} from '../assets/images/comment.svg';
import {ReactComponent as Repost} from '../assets/images/repost.svg';
import {ReactComponent as Share} from '../assets/images/share.svg';
import '../assets/css/publication.css'

const Post = ({author, content, image, date, activity}) => {
    return(
        <div className="post-container">
            <div className="profile-picture">
                <div className="profile-picture--container">
                    <img src={author.photo} alt="Profile pic"/>
                </div>
            </div>
            <div className="post">
                <div className="header-info">
                    <h3>{author.name}</h3>
                    <VeridiedLogo/>
                    <p>{author.nickname}</p>
                    <p>&#8231;</p>
                    <p>{date}</p>
                    <NavigateArrow/>
                </div>
                <p className="content">{content}</p>
                <div className="post-image">
                    <img src={image} alt="Feed post img"/>
                </div>
                <div className="post-activity">
                    <div className="likes">
                        <Like/>
                        <p>{activity.likes}</p>
                    </div>
                    <div className="comments">
                    <Comment/>
                    <p>{activity.comments}</p>
                    </div>
                    <div className="reposts">
                    <Repost/>
                    <p>{activity.reposts}</p>
                    </div>
                    <Share/>
                </div>
            </div>
        </div>
    )
}

export default Post;