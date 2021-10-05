import './CatItem.css'
const CatItem = (props) => {

    const {cats,onCatClick} = props

    return (
    <div>
        <div className="cat-item">
                <img src={cats.imageUrl} onClick={() => {onCatClick(cats)}}/>
                <h4>{cats.title}</h4>
        </div>
    
    </div> 
    )
}
export default CatItem;