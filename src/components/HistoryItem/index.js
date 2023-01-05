import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <div className="container-element">
        <p className="time-heading">{timeAccessed}</p>
        <img src={logoUrl} className="logo-img" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-name">{domainUrl}</p>
      </div>

      <button type="button" className="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
