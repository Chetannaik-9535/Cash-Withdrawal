// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

const denominationsList = [
  {id: 1, value: 50},
  {id: 2, value: 100},
  {id: 3, value: 200},
  {id: 4, value: 500},
]

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state

    return (
      <div className="CashWithdrawal-container">
        <div>
          <h1 className="profile">S</h1>
          <h1 className="profile-Name">Sarah Williams</h1>
        </div>
        <div>
          <p className="amout-title">Your Balance</p>
        </div>
        <div>
          <p className="User-Amount">{balance}</p>
          <p className="Amount-type">in Rupees</p>
        </div>
        <div>
          <p className="title">Withdraw</p>
          <p className="amout-title">CHOOSE SUM (IN RUPEES)</p>
        </div>
        <ul className="list-amount">
          {denominationsList.map(eachItem => (
            <DenominationItem
              key={eachItem.id}
              DenominationDetails={eachItem}
              onWithdraw={this.onWithdraw}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
