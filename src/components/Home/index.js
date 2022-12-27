import './index.scss';
import { Link} from 'react-router-dom';
import LogoB from '../../assets/images/LogoB-3.png'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = "arenco".split("");
    const jobArray = "developer.".split("");

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    
    
    return (
     <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1> 
                <span className={`${letterClass} `}>H</span>
                <span className={`${letterClass} _10`}>i</span>
                <span className={`${letterClass} _11`}>,</span>
                <br/>
                <span className={`${letterClass} _12`}>I</span>
                <span className={`${letterClass} _13`}>'</span>
                <span className={`${letterClass} _14`}>m</span>
                
                <img src={LogoB} alt="developer." />
                <AnimatedLetters letterClass={letterClass}
                 strArray={nameArray}
                 idx={15}
                />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                 strArray={jobArray}
                 idx={21}
                />
                </h1>
                <h2>frontend developer/ react / vue</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
       <Loader type="pacman"/>
     </> 

    )
}

export default Home