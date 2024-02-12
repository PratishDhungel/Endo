import React from 'react'
import Button from '../components/buttons'
import Card from '../components/card'
import Checkbox from '../components/checkbox'
import Search from '../components/searchbar'
import image1 from '../images/card/MM-05817_Endo Advantage XPD Prescription and Benefits Investigation Form 1.png'
import image2 from '../images/card/MM-05850_Benefits Investigation Sample Results Form 1.png'
import image3 from '../images/card/MM-05867_Sample Benefits Investigation (BI) Results Form Help Guide 1.png'

const images = [image1, image2, image3];

function Components() {
  return (
    <div>
        <br />
        <h2>Button</h2>
        <hr />
        <br />
      <Button className='btn-primary' btnTxt='View Asset'/>
      <br />
      <br />
      <hr />
      <h2>Card</h2>
      <hr />
      <br />
      <Card imgSrc={images[0]} assetType='PDF' brand='XIAFLEX® PD' customer='Healthcare Professionals, Consumers/Patients' marcCode='MM-05817' delivery='Email'/>
      <br />
      <hr />
      <h2>Checkbox</h2>
      <hr />
      <Checkbox id='cb1' htmlFor='cb1' label='AVEED®'/>
      <Checkbox id='cb2' htmlFor='cb2' label='SUPPRELIN® LA'/>
      <Checkbox id='cb3' htmlFor='cb3' label='XIAFLEX® DC'/>
      <Checkbox id='cb4' htmlFor='cb4' label='XIAFLEX® PD'/>
      <hr />
      <h2>Searchbar</h2>
      <hr />
      <Search/>
      <br />
      <hr />
    </div>
  )
}

export default Components
