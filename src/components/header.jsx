
import styles from '../components.style/card.module.scss'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <header>
        <Link to={"/"} >
        <img src="/logo.png" alt="" />
        </Link>
        <h1>کاتالوگ خدمات مجموعه آپامه</h1>
        {/* <PhoneCall color="#31496b" size={20}/> */}
    </header>
  )
}

export default header
