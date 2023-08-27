import React, { useState } from 'react';

function Contact() {
    const password = 'swordfish';
    const [authorized, setAuthorized] = useState(false);
  
    function handleSubmit(e) { // for authorization
      const enteredPassword = document.getElementById("xyz").value;
      const auth = enteredPassword === password;
      setAuthorized(auth)
    }

    const login = (
        <form action='#'>
            <input type="password" id = 'xyz' placeholder="Enter your password" />
            <input type='submit' onClick={handleSubmit}></input>
        </form>
    );

    const contactInfo =  (
        <ul>
            <li>
              client@example.com
            </li>
            <li>
              555.555.5555
            </li>
        </ul>
      );

    function TooglePage (){
        if (authorized) {
            return (
                <>
                    <h1>Contact</h1>
                    {contactInfo}
                </>
            );
        }
        return (
            <>
                <h1>Enter your Password</h1>
                {login}
            </>
        );
    }
  
    return (
        <div id="authorization">
          <h1>Hello</h1>
          <TooglePage/>
        </div>
    );
  }
  
  export default Contact;