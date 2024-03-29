import { useState } from 'react';
import bethebrand from '../images/bethebrand.svg';
import message from '../images/Message.svg';
import call from '../images/Call.svg';

function App() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [failureMessage, setFailureMessage] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const requiredFields = ["name", "email", "number", "message"];
    const isMissingField = requiredFields.some(field => !formData.get(field));
  
    if (isMissingField) {
      console.log("Please fill in all required fields.");
      setFailureMessage(true);
      return;
    }

    formData.append("access_key", "0374d7ce-f6bf-49d9-b3da-688217f6a997");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSuccessMessage(true); 
      setFailureMessage(false);
    } else {
      console.log("Failure", res);
      setSuccessMessage(false);
      setFailureMessage(true); 
    }
  };

  return (
    <div className='flex bg-red-500 w-100 rounded-xl m-20'>
      <div className='flex-col w-2/3 m-10'>
        <img className='h-40' src={bethebrand}></img>
        <div className='flex mt-60'>
          <img className='h-10 w-10' src={message}></img>
          <a className='gilroy-semibold text-white m-3' href="#">connect@madmonkey.in</a>
        </div>
        
        <div className='flex mt-5'>
          <img className='h-10 w-10' src={call}></img>
          <a className='gilroy-semibold text-white m-3' href="#">+91 91106 60335</a>
        </div>
      </div>

      <div className='flex-col w-2/3 rounded-xl m-10 bg-white h-100 w-100'>
        <h1 className='text-center gilroy-bold text-orange-500 text-4xl mt-5'>Contact Us</h1>
        <h3 className='text-center text-gray-500 p-2'>We will contact you within 24 hrs pinky monkey promise 🐵</h3>
        <form className='mt-10' onSubmit={onSubmit}>
          <div className='flex-col'>
            <h4 className='ml-5 gilroy-medium'>Name*</h4>
            <input className='rounded-xl ml-5 mt-2 h-12 w-96 bg-orange-200' type="text" name="name" />
          </div>
          <div className='flex-col'>
            <h4 className='ml-5 gilroy-medium'>Email*</h4>
            <input className='rounded-xl ml-5 mt-2 h-12 w-96 bg-orange-200' type="email" name="email" />
          </div>
          <div className='flex-col'>
            <h4 className='ml-5 gilroy-medium'>Number*</h4>
            <input className='rounded-xl ml-5 mt-2 h-12 w-96 bg-orange-200' name="number" />
          </div>
          <div className='flex-col'>
            <h4 className='ml-5 gilroy-medium'>Message*</h4>
            <div><textarea className='rounded-xl ml-5 mt-2 h-24 w-96 bg-orange-200' type="message" name="message"></textarea></div>
          </div>
          
          <div>
            <button type="submit" className="ml-5 mt-2 bg-orange-500 text-black gilroy-semibold rounded-lg transition ease-in-out delay-100 hover:scale-110  duration-300 rounded-lg p-2">
              Send Message
            </button>
          </div>
        </form>
        {successMessage && (
          <p className="m-5 border border-4 border-black rounded-md border-dashed text-center text-black gilroy-medium">Thank you for your message. It has been sent</p>
        )}

        {failureMessage && (
          <p className="m-5 border border-4 border-black rounded-md border-dashed text-center text-black gilroy-medium">Failed to send message. Please try again later.</p>
        )}
      </div>
    </div>
  );
}

export default App;
