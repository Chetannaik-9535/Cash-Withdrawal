// Write your code here
import './index.css'

const DenominationItem = props => {
  const {DenominationDetails, onWithdraw} = props
  const {value} = DenominationDetails

  const onWithDrawAmount = () => {
    onWithdraw(value)
  }

  return (
    <li className="DenominationItem-container">
      <div className="button-container">
        <div>
          <button className="button" type="button" onClick={onWithDrawAmount}>
            {value}
          </button>
        </div>
      </div>
    </li>
  )
}

export default DenominationItem


/*
  git config --global user.email naikc8468@gmail.com
    git config --global user.name Chetannaik-9535
     git remote add origin https://github.com/Chetannaik-9535/Cash-Withdrawal.git

*/