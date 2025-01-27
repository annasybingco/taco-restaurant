import '../../styles/_typography.scss'
import '../Homepage/Homepage.scss'
import Burger from "../../assets/images/original.png"

function Homepage() {
  return (
    <section className='homepage'>
      <h2 className="heading-2">Burgers</h2>
      <div className='menu'>
<ul className='menu__item'>
    <li className='menu__title h4'>Original Burger</li>
    <li className='menu__description body-small'>Griddled sweet onion, American cheese, house pickles, drop sauce, toasted potato roll.</li>
    <li className='menu__price body'>$8.50</li>
</ul>
<div>
    <img src={Burger} alt="original-burger" className='menu__image' />
</div>
      </div>
    </section>
  )
}

export default Homepage
