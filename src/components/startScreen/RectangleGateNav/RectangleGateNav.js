import {useState} from 'react'
import './styles.scss'
import ContactBox from '../ContactBox/ContactBox';

//////////////////////////// NO NEED TO OVERCOMPLICATE IT, NAVBAR GETS A NEW CLASS THAT 'HIDES IT' FROM THE VIEW ONCE THE RECTANGLE ANIMATION STARTS
//////////////////////////// AND RETURNS TO NORMAL, ONCE THE FIRST ZOOM ANIMATION BEGINS ON STAGE 2

const RectangleGateNav = () => {
    const [contactBox, toggleContactBox] = useState(false);
  return (
    <>
        <nav className="startScreen__navbar ">
            <div className="container">
                <div className="logo">
                    {/* <div href="#">Your Logo</div> */}
                    {/* <img src={process.env.PUBLIC_URL + '/foxS6.svg'} />  */}
                </div>
                <div className="main_list">
                    <ul className="navlinks">
                        <li><a href="#" className='hover-underline-animation'>LinkedIn</a></li>
                        <li><a href="#" className='hover-underline-animation'>GitHub</a></li>
                        <li><a href="#" className='hover-underline-animation'>Facebook</a></li>
                        <li><a href="#" className='hover-underline-animation' onClick={() => {toggleContactBox(true)}}>Contact</a></li>
                    </ul>
                </div>
                <span className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
        {contactBox && (
            <ContactBox toggleContactBox={toggleContactBox} />
        )}
    </>

  )
}

export default RectangleGateNav