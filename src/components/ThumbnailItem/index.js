import './index.css'

const ThumbnailItem = props => {
  const {categoryDetails, clickImage} = props
  const {id, thumbnailUrl} = categoryDetails
  const onClickthumbnail = () => {
    clickImage(id)
  }
  return (
    <li className="thumbnail-list">
      <button onClick={onClickthumbnail} className="img-btn" type="button">
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
