import './index.css'

const TabItem = props => {
  const {eachTab, setActiveTabId, isActive} = props
  const {tabId, displayText} = eachTab
  const tabHighlight = isActive ? 'tabitem-highlight' : ''
  const changeTab = () => {
    setActiveTabId(tabId)
  }
  return (
    <li className="list-container">
      <button
        onClick={changeTab}
        type="button"
        className={`tabItem ${tabHighlight}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
