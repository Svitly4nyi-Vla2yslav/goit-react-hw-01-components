import PropTypes from 'prop-types'
import css from './Statistics.module.css'

function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ stats, title}) => {

    return <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.statList}>
            {stats.map(stat =>
                <li key={stat.id} style={{
                    backgroundColor: randomHexColor()
                }} className={css.item}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>
            )}
        </ul>
    </section>
}

Statistics.prototype = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};