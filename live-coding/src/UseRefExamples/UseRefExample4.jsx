import { useRef } from "react";

function Scroll (){
    const sectionRef = useRef(null);

    const scrollTo = ()=>{
        sectionRef.current.scrollIntoView({behavior: 'smooth'})
    }


    return (<>      
    <button onClick={scrollTo}>
        Прокрутити вниз
      </button>
      
      <div style={{ height: '100vh', background: '#f0f0f0' }}>
        <p>Прокрути вниз, щоб побачити секцію...</p>
      </div>
      
      <div 
        ref={sectionRef} 
        style={{ 
          padding: '50px', 
          background: '#4CAF50', 
          color: 'white' 
        }}
      >
        <h2>Ти прокрутив сюди! 🎉</h2>
      </div></>)
}

export default Scroll;