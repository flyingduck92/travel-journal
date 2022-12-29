import './style/Travel.css'
import pinImg from '../assets/pin.svg'

function Travel(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props

  return (
    <div className='travel'>
      <div className='travelImg'>
        <img src={imageUrl} alt='image' />
      </div>
      <div className='travelContent'>
        <div className='travelContent--location'>
          <p>
            <img src={pinImg} alt='pin' />
            &nbsp; {location}
          </p>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className='travelContent--title'>{title}</div>
        <div className='travelContent--dates'>
          {startDate} - {endDate}
        </div>
        <div className='travelContent--description'>{description}</div>
      </div>
    </div>
  )
}

export default Travel
