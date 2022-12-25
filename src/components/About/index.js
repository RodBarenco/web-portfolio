import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3Alt, faHtml5, faJsSquare, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const about= "About me".split("");
    return ( 
      <>
        <div className="container about-page">
            <div className="text-zone">
             <h1>
                    <AnimatedLetters
                     letterClass={letterClass}
                     strArray = {about}
                     idx={15}
                     />
             </h1>
             <p>
                   I'm looking for opportunities as a beginner in the IT field,
                   that is putting all own energy and dedication into learning through pratice as well 
                   as from academic material.
             </p>
             <p> 
                    If you are curious...
                    I love technology, traveling and exercises. Currently 
                    I'm studying Systems Analysis and Development, and last but not least
                    I'm a trumpetist in my free time.
             </p>
             <p>  
                    if i could define myself in one sentence it would be: someone who loves his own family, 
                    who is a loyal friend and who has big dreams and works to achieve them.
             </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cube-spiner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faVuejs} color="#3aad61"/>
                    </div>
                    <div className='face2'>
                       <FontAwesomeIcon icon={faReact} color="#54d4f4"/>
                    </div> 
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                    </div>                   
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faAngular} color="#dd0031"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faCss3Alt} color="#28a4d9"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
      </>
    )        
}

export default About