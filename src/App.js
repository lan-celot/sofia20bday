import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Background music (placeholder) */}
      <audio src="https://drive.google.com/uc?export=download&id=1PLX6Ktls334I8Z9GdP0XuafqBo_RjQE8" autoPlay loop hidden />
      {/* Sparkles for festive effect */}
      <div className="sparkle" style={{top: '10%', left: '20%'}} />
      <div className="sparkle" style={{top: '30%', left: '80%'}} />
      <div className="sparkle" style={{top: '60%', left: '15%'}} />
      <div className="sparkle" style={{top: '80%', left: '60%'}} />
      <div className="sparkle" style={{top: '50%', left: '50%'}} />
      {/* Extra sparkles for variety */}
      <div className="sparkle variant" style={{top: '25%', left: '40%'}} />
      <div className="sparkle variant" style={{top: '70%', left: '70%'}} />
      {/* Floating cakes */}
      <div className="cake" style={{left: '10%', bottom: '20%', animationDelay: '0s'}}>
        <svg viewBox="0 0 32 32"><ellipse cx="16" cy="28" rx="12" ry="4" fill="#e3f0ff"/><rect x="6" y="14" width="20" height="14" rx="4" fill="#fff" stroke="#6a8dff" strokeWidth="2"/><rect x="10" y="10" width="12" height="6" rx="3" fill="#b3d8fd"/><rect x="14" y="4" width="4" height="8" rx="2" fill="#6a8dff"/><circle cx="16" cy="4" r="2" fill="#fff"/></svg>
      </div>
      <div className="cake" style={{left: '80%', bottom: '25%', animationDelay: '2.5s'}}>
        <svg viewBox="0 0 32 32"><ellipse cx="16" cy="28" rx="12" ry="4" fill="#e3f0ff"/><rect x="6" y="14" width="20" height="14" rx="4" fill="#fff" stroke="#6a8dff" strokeWidth="2"/><rect x="10" y="10" width="12" height="6" rx="3" fill="#b3d8fd"/><rect x="14" y="4" width="4" height="8" rx="2" fill="#6a8dff"/><circle cx="16" cy="4" r="2" fill="#fff"/></svg>
      </div>
      {/* Fireworks */}
      <div className="firework" style={{left: '30%', top: '8%', animationDelay: '0s'}}>
        <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="3" fill="#b3d8fd"/><g stroke="#6a8dff" strokeWidth="2"><line x1="20" y1="5" x2="20" y2="15"/><line x1="20" y1="25" x2="20" y2="35"/><line x1="5" y1="20" x2="15" y2="20"/><line x1="25" y1="20" x2="35" y2="20"/><line x1="10" y1="10" x2="17" y2="17"/><line x1="30" y1="10" x2="23" y2="17"/><line x1="10" y1="30" x2="17" y2="23"/><line x1="30" y1="30" x2="23" y2="23"/></g></svg>
      </div>
      <div className="firework" style={{left: '60%', top: '12%', animationDelay: '1.2s'}}>
        <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="3" fill="#6a8dff"/><g stroke="#e3f0ff" strokeWidth="2"><line x1="20" y1="5" x2="20" y2="15"/><line x1="20" y1="25" x2="20" y2="35"/><line x1="5" y1="20" x2="15" y2="20"/><line x1="25" y1="20" x2="35" y2="20"/><line x1="10" y1="10" x2="17" y2="17"/><line x1="30" y1="10" x2="23" y2="17"/><line x1="10" y1="30" x2="17" y2="23"/><line x1="30" y1="30" x2="23" y2="23"/></g></svg>
      </div>
      {/* Floating hearts */}
      <div className="heart" style={{left: '18%', bottom: '10%', animationDelay: '0s'}}>
        <svg viewBox="0 0 32 29.6"><path d="M23.6,0c-2.6,0-5,1.3-6.6,3.3C15.4,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4c0,7.1,10.2,13.2,15.1,18.7c0.6,0.7,1.7,0.7,2.3,0C21.8,23.6,32,17.5,32,10.4C32,4.7,27.3,0,23.6,0z" fill="#b3d8fd"/></svg>
      </div>
      <div className="heart" style={{left: '70%', bottom: '15%', animationDelay: '1.5s'}}>
        <svg viewBox="0 0 32 29.6"><path d="M23.6,0c-2.6,0-5,1.3-6.6,3.3C15.4,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4c0,7.1,10.2,13.2,15.1,18.7c0.6,0.7,1.7,0.7,2.3,0C21.8,23.6,32,17.5,32,10.4C32,4.7,27.3,0,23.6,0z" fill="#6a8dff"/></svg>
      </div>
      <div className="heart" style={{left: '40%', bottom: '5%', animationDelay: '3s'}}>
        <svg viewBox="0 0 32 29.6"><path d="M23.6,0c-2.6,0-5,1.3-6.6,3.3C15.4,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4c0,7.1,10.2,13.2,15.1,18.7c0.6,0.7,1.7,0.7,2.3,0C21.8,23.6,32,17.5,32,10.4C32,4.7,27.3,0,23.6,0z" fill="#e3f0ff"/></svg>
      </div>
      <div className="photo-grid">
        {/* Placeholder photos around the site */}
        <img src="https://drive.google.com/thumbnail?id=1PMbekMNCcIkUEBZ60Lwt-ECCvpJmZuMC" alt="placeholder" className="photo top-left" />
        <img src="https://drive.google.com/thumbnail?id=13mNmuPozqRICXXQAm1Y_0jzPc7MyBBiP" alt="placeholder" className="photo top-right" />
        <img src="https://drive.google.com/thumbnail?id=1RyJyR6PBnfeqKw5FCu3y7hAHj9BjSk7x" alt="placeholder" className="photo bottom-left" />
        <img src="https://drive.google.com/thumbnail?id=18nQqCrLgPOsBKTfSEX4TvS8xrYzqbbC0" alt="placeholder" className="photo bottom-right" />
        <img src="https://drive.google.com/thumbnail?id=1xgoyYAH0IsX9ut8clht9OR6F26sWnmCt" alt="placeholder" className="photo left" />
        <img src="https://drive.google.com/thumbnail?id=17kki66gzuTW0iB9p7oQlO1x7Km7QfZoq" alt="placeholder" className="photo right" />
      </div>
      <main className="center-message">
        <h1>Happy 20th BERTDAY, TAMIMI!</h1>
        <div className="divider"></div>
        <p>I know being 20 is scary since you're basically an adult now and more responsibility to handle, but I'm always believe that you're gonna
          overcome these challenges of your responsibilities because you are one of the strongest people I have ever known and the freedom to do pretty much anything you want. Of course I will always be here to support you and help you out whenever you need it. 
          I always wish you good health and for us to create new memories together. I have said it many times but I want to apologize for all of the arguments and pain that I have caused,
          I'll always continue to be a better boyfriend and person because I always want you to be happy and have someone that you can depend on. I am always grateful na you become a part of my life. 
          Can't believe na we got to celebrate our birthdays twice na and hopefully ganun din every year HAHAHA! Anyways I love you so much, Tamsy. Thank you for being the best girlfriend and happy BERTDAY!!</p>
      </main>
    </div>
  );
}

export default App;
