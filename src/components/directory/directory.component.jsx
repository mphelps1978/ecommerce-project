import React from 'react'

import MenuItem from './../menu-item/menu-item.component'
import SECTIONS_DATA from './../../data/sections.data'

import './directory.styles.scss'



const Directory = () => {


  return (
    <div className = 'directoryMenu'>
        {SECTIONS_DATA.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
        }
      </div>
  )
}

export default Directory