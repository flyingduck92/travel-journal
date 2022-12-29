import globeLogo from '../assets/globe.svg'
import './style/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={globeLogo} alt='logo' className='logo' />
      <h5>my travel journal.</h5>
    </div>
  )
}

export default Navbar
