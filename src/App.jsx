  "use client"

  import React, { useEffect, useState } from 'react';
  import './App.css';

  function App() {
    const [token, setToken] = useState('');
    const [profileData, setProfileData] = useState('');

    useEffect(() => {
      const handleCredentialResponse = (e) => {
        setToken(e.credential);
        console.log('Token -->', e.credential);
      };

      const loadGoogleScript = () => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.onload = () => {
          window.google.accounts.id.initialize({
            client_id: '851845998755-fsqhsq70hk3e1polocee8hqvf1arfor6.apps.googleusercontent.com',
            callback: handleCredentialResponse,
          });
          window.google.accounts.id.prompt();
          window.google.accounts.id.renderButton(document.getElementById('signinDiv'), {
            theme: 'outline',
            size: 'large',
            click_listener: onClickHandler,
          });
        };
        document.body.appendChild(script);
      };

      loadGoogleScript();
    }, []);

    const fetchData = async (token) => {
      try {
        const apiRes = await fetch('http://localhost:8081/google-sigin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
          }),
        });
        const res = await apiRes.json();
        if (res.error) {
          console.error('Error:', res.error);
        } else {
          setProfileData(res);
          console.log('Response:', res);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    function onClickHandler() {
      console.log('Sign in with Google button clicked...');
    }

    return (
      <>
        <div id="signinDiv"></div>
        <button onClick={() => fetchData(token)}>get data</button>
        {profileData && (
          <div className="data">
            <img src={profileData.picture} alt="rtyu" />
            <h1>Name : {profileData.name}</h1>
            <h1>Email : {profileData.email}</h1>
            <h1>{profileData.picture}</h1>
          </div>
        ) }
      </>
    );
  }

  export default App;
