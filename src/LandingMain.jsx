import React from 'react'

function LandingMain() {
    return (
        <div className='LandingMain'>
            <h1>Unlimited films, TV programmes and more</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='LandingInputs'>
                <input type="email" placeholder='Email address'/>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default LandingMain;