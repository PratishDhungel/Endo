import React from 'react'
import './card.scss'
import Button from '../buttons'



function Card({cardTitle,imgSrc,assetType,brand,customer,marcCode,delivery}) {
    return (
        <div className='card-container'>
            <img src={imgSrc} width='180px' height='232.94px'/>
            <h2>{cardTitle}</h2>
            <div className="details">
                <div className="details-titles-container">
                    <div className='details-title'>Asset Type</div>
                    <div className="details-info">{assetType}</div>
                </div>

                <div className="details-titles-container">
                    <div className='details-title'>Brand</div>
                    <div className="details-info">{brand}</div>
                </div>

                <div className="details-titles-container">
                    <div className='details-title'>Customer</div>
                    <div className="details-info">{customer}</div>
                </div>

                <div className="details-titles-container">
                    <div className='details-title'>MARC Code</div>
                    <div className="details-info">{marcCode}</div>
                </div>

                <div className="details-titles-container">
                    <div className='details-title'>Delivery</div>
                    <div className="details-info">{delivery}</div>
                </div>
            </div>
            <Button className='btn-primary' btnTxt='View Asset' />
        </div>
    )
}

export default Card
