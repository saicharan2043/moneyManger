import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    totalBalance: 0,
    income: 0,
    expenses: 0,
    amount: '',
    name: '',
    type: 'Income',
    historyList: [],
  }

  addValue = () => {
    const {name, amount, type} = this.state
    const newItem = {
      id: uuidv4(),
      name,
      amount,
      type,
    }

    this.setState(previwes => ({
      historyList: [...previwes.historyList, newItem],
      name: '',
      amount: '',
      type: 'Income',
    }))
  }

  render() {
    const {totalBalance, income, expenses, historyList} = this.state

    return (
      <div className="bg-color">
        <div className="name-container">
          <h1 className="name-heading">Hi,Richard</h1>
          <p className="name-paragraph">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>

        <ul className="ul-list-container">
          <MoneyDetails
            totalBalance={totalBalance}
            income={income}
            expenses={expenses}
          />
        </ul>

        <div className="ul-list-container">
          <div className="from-container">
            <form className="from">
              <h1 className="from-heading">Add Transaction</h1>
              <label className="label" htmlFor="Title">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                className="input"
                id="Title"
              />
              <label className="label" htmlFor="Amount">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                className="input"
                id="Amount"
              />
              <label className="label" htmlFor="Type">
                TYPE
              </label>
              <select className="input" value="" id="Type">
                {transactionTypeOptions.map(echValue => (
                  <option
                    className=""
                    value={echValue.displayText}
                    key={echValue.optionId}
                  >
                    {echValue.displayText}
                  </option>
                ))}
              </select>
              <button className="add-Button" onClick={this.addValue}>
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <ul className="history-un-list">
              <li className="list-top">
                <p className="box-top-name">Title</p>
                <p className="box-top-name">Amount</p>
                <p className="box-top-name">Type</p>
                <p className="box-top-name">Delete</p>
              </li>
              {historyList.map(echValue => (
                <TransactionItem
                  history={echValue}
                  key={echValue.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
