// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  deductBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const denominationsListContainer = (
      <div>
        {denominationsList.map(each => (
          <DenominationItem
            key={each.id}
            details={each}
            deductBalance={this.deductBalance}
          />
        ))}
      </div>
    )
    return (
      <>
        <div className="bg-container">
          <div className="profileDetails">
            <div className="display-profile">picture</div>
            <p>Sarah WIlliams</p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <p>{balance}</p>
          </div>
        </div>
        <div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul>{denominationsListContainer}</ul>
        </div>
      </>
    )
  }
}

export default CashWithdrawal
