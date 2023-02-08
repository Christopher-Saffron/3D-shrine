import React, {forwardRef} from 'react'
import './styles.scss'
import { TypeAnimation } from 'react-type-animation';

const StartScreenButton = forwardRef(({isVideoLoaded, toggleContinueButtonClicked, hoverSprings}, ref) => {
  return (
    <div ref={ref} className='startScreen__button'   onClick={() => {toggleContinueButtonClicked(true)}}>
        <TypeAnimation
            sequence={[
                'Continue', // Types 'One'
                2000, // Waits 1s
                'Kontynuuj', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                '続く', // Types 'Three' without deleting 'Two'
                2000, // Waits 2s
                'Fortsetzen',
                2000,

            ]}
            wrapper="div"
            className='startScreen__button_text'
            speed={70}
            cursor={true}
            repeat={Infinity}
        />

    </div>
  )
})

export default StartScreenButton