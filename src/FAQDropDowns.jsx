import React from 'react'
import FAQ from './FAQ'


function FAQDropDowns(props) {
    
    const [isHiddenActive, setIsHiddenActive] = React.useState(false);
    const setIsHidden = () => {
        setIsHiddenActive(!isHiddenActive);
    };
    return (
        <div className='FAQDropDowns'>
            <button className="questionButton" onClick={setIsHidden}>
                <div className='Question' >
                    <p>{props.question}</p>
                    {isHiddenActive ?
                        <i className={"fa-solid fa-x"} style={{fontSize: "20px"}}></i>:
                        <i className={"fa-solid fa-plus"}></i>
                    }
                </div>
            </button>
            {isHiddenActive ? <div className="Answer">
                <p>{props.answer1}</p>
                <p>{props.answer2}</p>
            </div> : null}
        </div>
    )
}

export default FAQDropDowns;