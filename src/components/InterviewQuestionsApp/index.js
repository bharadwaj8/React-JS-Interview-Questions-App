import {Component} from 'react'
import './index.css'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'

class InterviewQuestionsApp extends Component {
  state = {
    showId: [],
    languageFilter: 'ALL',
    levelFilter: 'ALL',
  }

  updateLanguageFilter = value => {
    this.setState({languageFilter: value})
  }

  updateLevelFilter = value => {
    this.setState({levelFilter: value})
  }

  changeShow = id => {
    const {showId} = this.state
    if (showId.includes(id)) {
      this.setState(prevState => ({
        showId: prevState.showId.filter(each => each !== id),
      }))
    } else {
      this.setState(prevState => ({showId: [...prevState.showId, id]}))
    }
  }

  render() {
    const {categoryData, levelsData, questionsData} = this.props
    const {showId, languageFilter, levelFilter} = this.state
    let filteredQuestionsData = questionsData
    if (languageFilter !== 'ALL' || levelFilter !== 'ALL') {
      filteredQuestionsData = questionsData.filter(each => {
        if (languageFilter !== 'ALL' && levelFilter !== 'ALL') {
          return (
            each.language === languageFilter &&
            each.difficultyLevel === levelFilter
          )
        }
        if (languageFilter === 'ALL') {
          return each.difficultyLevel === levelFilter
        }
        if (levelFilter === 'ALL') {
          return each.language === languageFilter
        }
        return true
      })
    }

    return (
      <div>
        <div className="header-bg">
          <h1 className="header-heading">30 Seconds of Interviews</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="bg"
            className="header-image"
          />
        </div>
        <div className="footer">
          <div className="filters-container">
            <div className="each-filter">
              <p className="filter-name">LANGUAGE</p>
              <Filters
                details={categoryData}
                type="language"
                updateLanguageFilter={this.updateLanguageFilter}
                updateLevelFilter={this.updateLevelFilter}
              />
            </div>
            <div className="each-filter">
              <p className="filter-name">DIFFICULTY LEVEL</p>
              <Filters
                details={levelsData}
                type="level"
                updateLanguageFilter={this.updateLanguageFilter}
                updateLevelFilter={this.updateLevelFilter}
              />
            </div>
          </div>
          <div className="questions-container">
            {filteredQuestionsData.map(each => (
              <InterviewQuestion
                key={each.id}
                details={each}
                showId={showId}
                changeShow={this.changeShow}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
