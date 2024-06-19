import React from 'react'
import FAQDropDowns from './FAQDropDowns';

function FAQ() {
    return (
        <div className='FAQ'>
            <h2>Frequently Asked Questions</h2>
            <FAQDropDowns 
                question = 'What is Netflix?'
                answer1 = "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more on thousands of internet-connected devices." 
                answer2 = {[<br />, " You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!"]}
            />
            <FAQDropDowns 
                question = 'How much does Netflix cost?'
                answer1 = "Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from £4.99 to £17.99 a month. No extra costs, no contracts."
            />
            <FAQDropDowns 
                question = 'Where can I watch?'
                answer1 = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
                answer2 = {[<br />, "You can also download your favourite programmes with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."]}
            />
            <FAQDropDowns 
                question = 'How do I cancel?'
                answer1 = "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time."
                
            />
            <FAQDropDowns 
                question = 'What can I watch on Netflix?'
                answer1 = "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want."
            />
            <FAQDropDowns 
                question = 'Is Netflix good for children?'
                answer1 = "The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space."
                answer2 = {[<br />, "Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see."]}
            />
            
            <p className='FAQ-p'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='LandingInputs'>
                <input type="email" placeholder='Email address' style={{background: "rgba(255,255,255,0.06)"}}/>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default FAQ;