import './style/TravelList.css'
import Travel from './Travel'
import list from '../data/data'

function TravelList() {
  return (
    <div className='travelList'>
      {list.map((item) => (
        <Travel {...item} key={item.title} />
      ))}
      {/* <Travel /> */}
      {/* <Travel /> */}
    </div>
  )
}

export default TravelList
