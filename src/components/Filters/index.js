import './index.css'

const Filters = props => {
  const {details, type, updateLanguageFilter, updateLevelFilter} = props

  const getLanguageFilter = event => {
    console.log(event.target.value)
    updateLanguageFilter(event.target.value)
  }

  const getLevelFilter = event => {
    console.log(event.target.value)
    updateLevelFilter(event.target.value)
  }

  return (
    <select
      className="selector"
      onChange={type === 'language' ? getLanguageFilter : getLevelFilter}
    >
      {type === 'language'
        ? details.map(each => (
            <option value={each.language}>{each.language}</option>
          ))
        : details.map(each => <option value={each.level}>{each.level}</option>)}
    </select>
  )
}
export default Filters
