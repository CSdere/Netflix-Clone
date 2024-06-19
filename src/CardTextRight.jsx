import React from 'react'

function CardRight(props) {
    return (
        <div className="CardLeft" style={{marginRight: '8px'}}>
            <div className='CardLeftImgBox'>
                <img src={props.imgSrc} />
            </div>
            <div className='CardLeftText' style={{marginLeft: '8px'}}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )

}

export default CardRight;