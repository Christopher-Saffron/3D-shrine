
import React from 'react'
import './styles.scss'

const UIMainScreenOptions = ({toggleMusic, setPreset, toggleAllowParticles,  setnewCameraArgs, }) => {

    

    const selectDifferentPreset = (target) => {
      document.querySelectorAll('.presets_box').forEach((element) => {element.classList.remove('presets_boxHolder_selected')})
      target.classList.add('presets_boxHolder_selected')

      setPreset(Number(target.dataset.preset))
    }

    const hideMenu = () => {
      document.querySelector('.interface__right_holder').classList.toggle('hideElement')
      document.querySelector('.interface__options').classList.toggle('hideElement')
    }

    return (
      <div className='interface__options' style={{display: 'none'}}>
        <div className='interface__options_line'>
          <img className='interface__options_img' onClick={() => { setnewCameraArgs([-7, 12, 9, -Math.PI/2, 0, 0, 75, null]) }} src={process.env.PUBLIC_URL + '/icon.svg'} alt='' />
          <img className='interface__options_img interface__options_disabled' onClick={(e) => {toggleAllowParticles(prevState => {return !prevState}); e.target.classList.toggle('interface__options_disabled')}} src={process.env.PUBLIC_URL + '/risk.svg'} alt='' />
          <img className='interface__options_img interface__options_alwaysOn' onClick={(e) => {hideMenu(); e.target.classList.toggle('interface__options_disabled')}} src={process.env.PUBLIC_URL + '/eye3.svg'} alt='' />
          <img className='interface__options_img' onClick={(e) => {toggleMusic(prevState => !prevState); e.target.classList.toggle('interface__options_disabled')}} src={process.env.PUBLIC_URL + '/soundON.svg'} alt='' />
        </div>
        <div className='presets'>
          <p>PRESETS</p>
          <div className='presets_boxHolder'>
            <div data-preset='1' className='presets_box presets_boxHolder_selected' onClick={(e) => {selectDifferentPreset(e.target)}}>
              1
            </div>
            <div data-preset='2' className='presets_box' onClick={(e) => {selectDifferentPreset(e.target)}}>
              2
            </div>
            <div data-preset='3' className='presets_box' onClick={(e) => {selectDifferentPreset(e.target)}}>
              3
            </div>
          </div>
        </div>
        
        <div className='interface__right_text'>
          <h2>設定</h2>
        </div>
      </div>
    )
  }

export default UIMainScreenOptions