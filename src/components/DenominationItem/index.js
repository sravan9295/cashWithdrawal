// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, deductBalance} = props
  const {value} = details
  const onDeduct = () => {
    deductBalance(value)
  }

  return (
    <li>
      <button type="button" onClick={onDeduct}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
