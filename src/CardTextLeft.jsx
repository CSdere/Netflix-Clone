import React from 'react'

function CardLeft(props) {
    return (
        <div className="CardLeft">
            <div className='CardLeftText'>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
            <div className='CardLeftImgBox'>
                <img src={props.imgSrc} />
            </div>
        </div>
    )

}

export default CardLeft;