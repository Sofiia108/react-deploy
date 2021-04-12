function Post({ author, content, image, date }){
    return (
        <>
            <div>{author.name}</div>
            <div><img src={author.photo} /></div>
            <div>{author.nickname}</div>
            <div>{content}</div>
            <div><img src={image} /></div>
            <div>{date}</div>
        </>
    )
}

export default Post;