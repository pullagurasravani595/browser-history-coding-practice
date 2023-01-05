import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem/index'

class HistoryDetails extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {historyDetailsList} = this.props
    const requiredList = [...historyDetailsList]

    this.setState({
      historyList: requiredList,
    })

    const filteredHistory = requiredList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({
      historyList: filteredHistory,
    })
  }

  render() {
    const {historyDetailsList} = this.props
    const {searchInput, historyList} = this.state
    console.log(historyList)

    const searchResult = historyDetailsList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput),
    )

    return (
      <div>
        <div className="history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-img"
            />
            <input
              type="search"
              placeholder="Search history"
              className="input-element"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>

        {searchResult.length !== 0 ? (
          <ul className="banner-container">
            {searchResult.map(eachItem => (
              <HistoryItem
                historyDetails={eachItem}
                key={eachItem.id}
                deleteHistory={this.deleteHistory}
              />
            ))}
          </ul>
        ) : (
          <p className="banner-container no-history-container">
            There is no history to show
          </p>
        )}
      </div>
    )
  }
}
export default HistoryDetails
