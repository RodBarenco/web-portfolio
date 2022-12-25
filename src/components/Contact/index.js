import { useEffect, useRef, useState} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()

    const contact = "contact me".split("")

    useEffect(() => {
      let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 5000)
      return () => {
                clearTimeout(timeoutId)
            }
      }, [])
    
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(
           'service_portifolio',
           'template_q6ptspq', 
           form.current,
           'SdjP4FdfvS0iFeIzF')
            .then(
                () => {
                      alert('Message successfully sent!')
                      window.location.reload(false)
                    },
                    () => {
                      alert('Failed to send the message, please try again')
                    }
                  )};
      
    return (     
        <>
         <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                      strArray={contact}
                      idx={15}
                      letterClass={letterClass}
                    />
                </h1>
                <p>
                I am interested in opportunities as a freelancer, and in projects that 
                I can collaborate and develop myself as a better professional.
                If you have any questions, please fell free to contact me.
                </p>

                <div className='contact-form'>
                 <form ref={form} onSubmit ={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='name' required />
                        </li>
                        <li className='half'>
                            <input type='text' name='email' placeholder='email' required />
                        </li>
                        <li>
                            <input placeholder='Subject' type='text' name='subject' required />
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required />
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='send' />
                        </li>
                    </ul>
                 </form>
                </div>
            </div>

            <div className='info-map'>
              <div className='text-map'>
              Rodrigo Barenco,
              <br/>
              Rio de janeiro, RJ - Brazil
              <br />
              Rua Henrique Ferreira, Bento Ribeiro 
              <br/>
              cep - 21550-290
              <br/>
              <span>rodrigobarenco@hotmail.com</span>
            </div>
            </div>
            <div className='map-wrap'>
              <MapContainer center={[-22.8624460, -43.3536702]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-22.8624460, -43.3536702]}>
              <Popup>Hi! I live here!!!</Popup>
            </Marker>
            </MapContainer>
            </div>
         </div>
         < Loader type='pacman'/>
        </>        
    )
}

export default Contact