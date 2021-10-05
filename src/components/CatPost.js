import './CatPost.css'

const CatPost = (props) => {
    
    const {cats , onBgClick} = props

    return (
        <div className="cat-post">
            <div className="cat-post-bg" onClick={onBgClick}/>
            <div className="cat-post-content">
                <img src={cats.imageUrl} />  
                <h4>{cats.title}</h4>
            </div>
        </div>
    )
}

export default CatPost;
