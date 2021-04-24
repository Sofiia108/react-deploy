import './Post.css'

function Post({author, content, image, date}) {
    return (
        <div className="Post-container">
            <div><img className="Post-logo" src={author.photo}/></div>
            <div className="Post-content">
                <div>
                    <span className="Content-item"> {author.name} </span>
                    <span className="Content-item"> {author.nickname} </span>
                    <span className="Content-item"> {date} </span>
                </div>
                <div>{content}</div>
                <div><img className="Content-image" src={image}/></div>
            </div>
        </div>
    )
}

export default Post;