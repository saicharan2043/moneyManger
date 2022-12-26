// Write your code here
import './index.css'

const TransactionItem = props => {
  const {history, onDelete} = props
  const {name, amount, type} = history
  return (
    <li className="list-items">
      <p className="list-name">{name}</p>
      <p className="list-name">{amount}</p>
      <p className="list-name">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt=""
        className="img-delete"
      />
    </li>
  )
}

export default TransactionItem
