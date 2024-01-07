import { useRef } from 'react';
import moon from './assets/moon.jpg'
import land from './assets/land.jpg'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



function App() {
  const ref = useRef();
  return (
    <div>
      <Parallax pages={4} ref={ref}>
        {}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome!</h2>
          <h3>by Gannon O'Connor</h3>
          <h4>Click to take a journey</h4>
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>About me!</h2>
          <p>Welcome to my new and improved website.</p>
        <p>I am currently employed by <a href="https://www.firstlight.net/" target='_blank'>Firstlight</a></p>
         <p>To book me on Calendly click the emoji <a target='_blank' href="https://calendly.com/g_oconnor/30min" >🗓️</a></p> 
         <br />
         <p><a href="https://docs.google.com/document/d/e/2PACX-1vQavsygp5SQMpwX5qmSjj23pWbN2760NN-w_X-4tLv7KMPzCcrnUHlzRSIcc_k92Q/pub" target='_blank'>Résumé</a></p>
         <p><a href="https://www.linkedin.com/in/gannon-o-connor-593871161/" target='_blank'>LinkedIn</a></p>
        <br />
        <p>Shoot For The Stars 💫</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;