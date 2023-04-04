import PropTypes from 'prop-types';
import statistic from "./Statistics.module.css"

export default function Statistic({
  stats,
  title,
  }) {
  return (
    <section className={statistic.statistics}>
  <h2 className={statistic.title}>{title}</h2>

  <ul className={statistic.list}>
    {stats.map(stat => (<li className={statistic.item} key={stat.id}>
      <span className={statistic.label}>{stat.label}</span>
      <span className={statistic.percentage}>{stat.percentage}</span>
    </li>))}
    
  </ul>
</section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}))
}

