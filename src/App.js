import React, { useState, useEffect, useRef } from 'react';
import backSvg from './images/pattern-bg.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap'
import imageOne from './images/image-tanya.jpg'
import imageTwo from './images/image-john.jpg'

const App = () => {
    const testimonials = [
        {
            quote: `"I’ve been interested in coding for a while but never taken the jump, until now. 
                    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
                    excited about the future."`,
            name: "Tanya Sinclair",
            jobTitle: "UX Engineer"
        },
        {
            quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
                    The depth the instructors go into is incredible. I now feel so confident about 
                    starting up as a professional developer. ”`,
            name: "John Tarkpor",
            jobTitle: "Junior Front-end Developer"
        }
    ]

    const [active, setActive] = useState({
        slideOne: true,
        slideTwo: false
    })

    let testimonialTextOne = useRef(null)
    let testimonialTextTwo = useRef(null)

    let testimonialImgOne = useRef(null)
    let testimonialImgTwo = useRef(null)

    useEffect(() => {
        gsap.to(testimonialTextOne, { xPercent: '100', ease: 'back', duration: 1, opacity: 1 });
        gsap.to(testimonialImgOne, { opacity: 1 });
    }, [])

    function nextSlide() {
        if (active.slideOne) {
            testimonialTextOne.classList.remove('active');
            testimonialTextTwo.classList.add('active')
            let tl = gsap.timeline({
                defaults: {
                    ease: 'back', duration: 1, opacity: 1
                }
            });
            tl.to(testimonialTextOne, { xPercent: '-100' });
            tl.to(testimonialTextTwo, { xPercent: '100' }, '-=.8');


            gsap.to(testimonialImgOne, { opacity: 0 });
            gsap.to(testimonialImgTwo, { opacity: 1 });

            setActive({
                slideOne: false,
                slideTwo: true
            })
        }
        else {
            return
        }
    }

    function previousSlide() {
        if (active.slideTwo) {
            testimonialTextTwo.classList.remove('active');
            testimonialTextOne.classList.add('active')
            let tl = gsap.timeline({
                defaults: {
                    ease: 'back', duration: 1, opacity: 1
                }
            }
            );
            tl.to(testimonialTextTwo, { xPercent: '-100' });
            tl.to(testimonialTextOne, { xPercent: '100' }, '-=.8');

            gsap.to(testimonialImgTwo, { opacity: 0 });
            gsap.to(testimonialImgOne, { opacity: 1 });

            setActive({
                slideOne: true,
                slideTwo: false
            })
        }
        else {
            return
        }
    }

    return (
        <div className='container'>
            <div className="contentGrid">

                {/* TEXT -------  */}
                <div className="testimonialText">
                    <ul>

                        <li ref={el => (testimonialTextOne = el)} className={active.slideOne ? 'active' : ''}>
                            <p>{testimonials[0].quote}</p>
                            <h6><strong>{testimonials[0].name}</strong> <span>{testimonials[0].jobTitle}</span></h6>
                        </li>

                        <li ref={el => (testimonialTextTwo = el)} className={active.slideTwo ? 'active' : ''} >
                            <p>{testimonials[1].quote}</p>
                            <h6><strong>{testimonials[1].name}</strong> <span>{testimonials[1].jobTitle}</span></h6>
                        </li>

                    </ul>
                </div>
                {/* TEXT -------  */}


                {/* IMG SIDE -------  */}
                <div className='imgSide'>

                    <div className="testimonialImgContainer">
                        <img ref={el => (testimonialImgOne = el)} src={imageOne} alt="" />
                        <img ref={el => (testimonialImgTwo = el)} src={imageTwo} alt="" />
                    </div>

                    <img className='backSvg' src={backSvg} alt="" />
                    <div className="slideButtons">
                        <FontAwesomeIcon onClick={() => { previousSlide() }} icon={faChevronLeft} size='2x' />
                        <FontAwesomeIcon onClick={() => { nextSlide() }} icon={faChevronRight} size='2x' />
                    </div>
                </div>
                {/* IMG SIDE -------  */}

            </div>
        </div>
    );
}

export default App;