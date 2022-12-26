// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalBalance, income, expenses} = props
  return (
    <>
      <li className="list list-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt=""
          className="img"
        />
        <div className="">
          <p className="position-text">Your Balance</p>
          <p className="amount-text">Rs {totalBalance}</p>
        </div>
      </li>

      <li className="list list-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt=""
          className="img"
        />
        <div className="">
          <p className="position-text">Your Balance</p>
          <p className="amount-text">Rs {income}</p>
        </div>
      </li>

      <li className="list list-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt=""
          className="img"
        />
        <div className="">
          <p className="position-text">Your Balance</p>
          <p className="amount-text">Rs {expenses}</p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
