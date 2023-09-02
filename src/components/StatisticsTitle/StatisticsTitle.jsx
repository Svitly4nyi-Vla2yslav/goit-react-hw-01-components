
import PropTypes  from 'prop-types'
import css from './StatisticsTitle.module.css'
export const StatisticsTitle = ({title}) => {
    return <h2 className={css.title}>{title}</h2>
}

StatisticsTitle.propTypes = {
    title: PropTypes.string.isRequired
}