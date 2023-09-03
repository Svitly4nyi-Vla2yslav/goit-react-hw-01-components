import PropTypes from 'prop-types'
import { Transaction } from './Transaction'
import css from './TransactionHistory.module.css'
export const TransactionHistory = ({ items }) => {
    return <table className={css.transactionHistory}>
        {items.map(({ id, type, amount, currency }) => (
            <Transaction
                id={id}
                type={type}
                amount={amount}
                currency={currency}
            />
        ))}
    </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired
}