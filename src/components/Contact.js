import { useState } from 'react';
import bethebrand from '../images/bethebrand.svg';
import message from '../images/Message.svg';
import call from '../images/Call.svg';
import grp from "../images/Group 156.svg";
import img1 from "../images/Mad Monkey-logo.svg"
import linkedin from "../images/linkedin.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"

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
    <>
    <div className='phone:hidden laptop:flex bg-red-500 w-100 rounded-xl m-20'>
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
        <form className='mt-10 laptop:grid laptop:place-items-center' onSubmit={onSubmit}>
          <div>
            <h4 className='ml-5 mr-5 gilroy-medium'>Name*</h4>
            <input className='rounded-xl ml-5 mr-5 mt-2 h-12 w-96 bg-orange-200' type="text" name="name" />
          </div>
          <div>
            <h4 className='ml-5 mr-5 gilroy-medium'>Email*</h4>
            <input className='rounded-xl ml-5 mr-5 mt-2 h-12 w-96 bg-orange-200' type="email" name="email" />
          </div>
          <div>
            <h4 className='ml-5 mr-5 gilroy-medium'>Number*</h4>
            <input className='rounded-xl ml-5 mr-5 mt-2 h-12 w-96 bg-orange-200' name="number" />
          </div>
          <div>
            <h4 className='ml-5 mr-5 gilroy-medium'>Message*</h4>
            <div><textarea className='rounded-xl ml-5 mr-5 mt-2 h-24 w-96 bg-orange-200' type="message" name="message"></textarea></div>
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
    <div className='phone:flex-col laptop:hidden'>
      <img className='h-2/3 w-5/6 mt-10 ml-5' src={grp}></img>
      <div className='rounded-xl bg-white m-5'>  
          <h1 className='gilroy-bold text-orange-500 text-4xl mt-5 text-center'>Contact Us</h1>
          <h3 className='text-center gilroy-medium text-gray-500 p-2 mt-5'>We will contact you within 24 hrs pinky monkey promise 🐵</h3>
          <form className='mt-10 phone:flex-col' onSubmit={onSubmit}>
              <h4 className='ml-5 gilroy-medium text-left'>Name*</h4>
              <input className='phone:grid phone:place-items-center rounded-xl w-5/6 h-12 m-2 bg-orange-200' type="text" name="name" />

              <h4 className='ml-5 gilroy-medium text-left'>Email*</h4>
              <input className='phone:grid phone:place-items-center rounded-xl w-5/6 h-12 m-2 bg-orange-200' type="email" name="email" />

              <h4 className='ml-5 gilroy-medium text-left'>Number*</h4>
              <input className='phone:grid phone:place-items-center rounded-xl w-5/6 h-12 m-2 bg-orange-200' name="number" />
              
    
              <h4 className='ml-5 gilroy-medium text-left'>Message*</h4>
              <textarea className='phone:grid phone:place-items-center rounded-xl w-5/6 h-40 m-2 bg-orange-200' type="message" name="message"></textarea>
          
              <button type="submit" className="ml-2 w-5/6 bg-orange-500 text-black gilroy-semibold rounded-lg transition ease-in-out delay-100 hover:scale-110 duration-300 rounded-lg p-2">
                Send Message
              </button>
          
          </form>
          {successMessage && (
            <p className="m-5 border border-4 border-black rounded-md border-dashed text-center text-black gilroy-medium">Thank you for your message. It has been sent</p>
          )}

          {failureMessage && (
            <p className="m-5 border border-4 border-black rounded-md border-dashed text-center text-black gilroy-medium">Failed to send message. Please try again later.</p>
          )}
        </div>

        {/* footer */}

    <div className='tablet:flex laptop:flex desktop:flex phone:hidden bg-white w-screen tablet:gap-5'>
    
    <div className='flex-col w-2/4 mx-12 desktop:ml-20 desktop:my-10 tablet:my-20 laptop:m-16'>
      <img className='ml-5 laptop:w-1/2 desktop:my-10' src={img1}></img>
      <div className='phone:m-5 tablet:text-xl laptop:text-3xl desktop:text-5xl gilroy-semibold text-red-500 tablet:mt-5'>India’s Leading Product Marketing Agency</div>
    </div>

    <div className='w-1/5 desktop:text-3xl my-10 desktop:mb-20 tablet:flex-col mt-20'>
      <div className='gilroy-bold text-red-500 tablet:text-xl desktop:text-5xl laptop:text-2xl'>Navigation</div>
      <div className='gilroy-medium mt-5 desktop:text-2xl laptop:text-lg tablet:text-md'><a href="#">Home</a></div>
      <div className='gilroy-medium mt-5 desktop:text-2xl laptop:text-lg tablet:text-md'><a href="#">About Us</a></div>
      <div className='gilroy-medium mt-5 desktop:text-2xl laptop:text-lg tablet:text-md'><a href="#">Case Studies</a></div>
      <div className='gilroy-medium mt-5 desktop:text-2xl laptop:text-lg tablet:text-md'><a href="#">Contact Us</a></div>
    </div>

    <div className='w-1/5 desktop:text-5xl desktop:my-20 tablet:flex-col mt-20'>
      <div className='gilroy-bold text-red-500 desktop:text-5xl laptop:text-2xl'>Reach Us</div>
      <div className='gilroy-medium desktop:text-2xl mt-5'><a href="#">+91 9110660335</a></div>
      <div className='gilroy-medium desktop:text-2xl mt-5'><a href="#">connect@madmonkey.in</a></div>
    </div>

    <div className='w-1/5 my-10 desktop:mb-20 tablet:flex-col tablet:mr-10 mt-20'>
      <div className='gilroy-bold text-red-500 desktop:text-5xl laptop:text-2xl'>Connect with us</div>
      <div className='flex gap-5 mt-5'>
        <a href="https://www.linkedin.com/company/madmonkeyhq/about/"><img className='desktop:w-[60px]' src={linkedin}></img></a>
        <a href="#"><img className='desktop:w-[60px]' src={instagram}></img></a>
        <a href="#"><img className='desktop:w-[60px]' src={facebook}></img></a>
      </div>
    </div>
  </div>

  {/* phone footer */}
  <div className='tablet:hidden phone:text-center desktop:hidden bg-white'>

    <div className='p-4'>
      <img className='m-5 desktop:w-1/2 desktop:h-[500px]' src={img1}></img>
      <div className='phone:m-5 desktop:text-5xl gilroy-semibold text-orange-500'>India’s Leading Product Marketing Agency</div>
    </div>

    <div className='phone:flex-col desktop:w-1/4'>
      <div className='flex justify-center items-center gap-5'>
        <a href="https://www.linkedin.com/company/madmonkeyhq/about/"><img src={linkedin}></img></a>
        <a href="#"><img src={instagram}></img></a>
        <a href="#"><img src={facebook}></img></a>
      </div>
    </div>

    <div className='phone:text-center phone:mt-5'>
      <div className='gilroy-bold text-orange-500 text-xl'>Reach Us</div>
      <div className='gilroy-medium mt-2'><a href="#">+91 9110660335</a></div>
      <div className='gilroy-medium mt-2'><a href="#">connect@madmonkey.in</a></div>
    </div>


    <div className='phone:text-center phone:mt-10'>
      <div className='gilroy-semibold text-orange-500 text-xl'>Navigation</div>
      <div className='gilroy-semibold mt-2'><a href="#">Home</a></div>
      <div className='gilroy-semibold mt-2'><a href="#">About Us</a></div>
      <div className='gilroy-semibold mt-2'><a href="#">Case Studies</a></div>
      <div className='gilroy-semibold mt-2'><a href="#">Contact Us</a></div>
    </div>

    <div className='mt-10 gilroy-semibold bg-orange-500 text-center text-white h-10'>Designed & built with passion in India 🚀</div>
  </div>
      </div>
    </>
  );
}

export default App;
