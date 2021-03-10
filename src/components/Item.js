import React from 'react'
import Button from './Button'

const Item = ({ title, desc, backgroundImg, leftBtnTxt, leftBtnLink,rightBtnTxt, rightBtnLink, twoButtons, first }) => {
    return (
        <div className='item' style={{

        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>title</p> 
                    <div className="item__textDesc"> 
                        <p>desc</p>
                    </div>
                </div>
            </div>
            <div className="item__LowerThird">
                <div className="item__buttons">
                    <Button imp='primary' text={leftBtnLink} link={leftBtnLink} />
                    {twoButtons && (
                        <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                    )} 
                </div>
                {first && (
                    <div className="item__expand">
                        
                    </div>
                )}
        </div>
    )
}

export default Item
