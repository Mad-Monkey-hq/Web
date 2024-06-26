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
      <div className='phone:hidden tablet:flex bg-red-500 desktop:flex desktop:mx-60 desktop:h-3/4 rounded-[36px] tablet:m-16 laptop:mx-20 laptop:my-10'>
        <div className='flex-col desktop:text-4xl desktop:m-24 laptop:text-3xl tablet:text-xl w-2/3 m-16'>
          <img className='tablet:h-1/3 laptop:h-1/3 desktop:h-1/2' src={bethebrand}></img>

          <a className='flex gilroy-semibold text-white tablet:mt-60 mt-60 laptop:mb-10' href="#"><img className='mr-5 tablet:h-8 tablet:mr-2 h-10 w-10' src={message}></img>connect@madmonkey.in</a>
          <a className='flex gilroy-semibold text-white laptop:mb-28 tablet:mt-4' href="#"><img className='mr-5 tablet:h-8 tablet:mr-2 h-10 w-10' src={call}></img>+91 91106 60335</a>

        </div>

        <div className='flex-col w-1/2 desktop:m-24 desktop:p-5 rounded-[30px] tablet:m-10 bg-white'>
          <h1 className='text-center gilroy-bold text-orange-500 desktop:text-5xl text-4xl mt-5'>Contact Us</h1>
          <h3 className='laptop:text-3xl desktop:p-5 desktop:text-4xl text-center text-gray-500 p-2'>We will contact you within 24 hrs <span className='line-through offset-4'>pinky</span> monkey promise 🐵</h3>
          <form className='desktop:h-3/4 desktop:text-3xl tablet:mt-5 tablet:grid tablet:place-items-center' onSubmit={onSubmit}>
            <div>
              <h4 className='tablet:ml-5 tablet:mr-5 gilroy-medium my-2'>Name*</h4>
              <input className='laptop:w-100 rounded-xl tablet:mx-5 h-12 w-96 bg-orange-200' type="text" name="name" />
            </div>
            <div>
              <h4 className='tablet:mx-5 gilroy-medium my-2'>Email*</h4>
              <input className='rounded-xl tablet:mx-5 h-12 w-96 bg-orange-200' type="email" name="email" />
            </div>
            <div>
              <h4 className='tablet:mx-5 gilroy-medium my-2'>Number*</h4>
              <input className='rounded-xl tablet:mx-5 h-12 w-96 bg-orange-200' name="number" />
            </div>
            <div>
              <h4 className='tablet:mx-5 gilroy-medium my-2'>Message*</h4>
              <div><textarea className='rounded-xl tablet:mx-5 h-24 w-96 bg-orange-200' type="message" name="message"></textarea></div>
            </div>

            <div>
              <button type="submit" className="my-5 rounded-xl text-xl text-white tablet:mx-5 h-12 w-96 bg-orange-500">
              SEND MESSAGE
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
      <div className='phone:flex-col phone:mt-20 tablet:hidden laptop:hidden desktop:hidden'>
        <img className='w-3/4 h-[200px] mx-10' src={grp}></img>
        <div className='rounded-xl bg-white mx-2'>
          <h1 className='gilroy-bold text-orange-500 text-4xl mt-2 p-2 text-center'>Contact Us</h1>
          <h3 className='text-center gilroy-medium text-gray-500 p-2 mt-5'>We will contact you within 24 hrs pinky monkey promise 🐵</h3>
          <form className='flex-col items-center justify-center text-left' onSubmit={onSubmit}>
            <h4 className='gilroy-medium mt-2 ml-4'>Name*</h4>
            <input className='rounded-xl w-11/12 ml-3 h-12 bg-orange-200' type="text" name="name" />

            <h4 className='gilroy-medium ml-3 mt-4'>Email*</h4>
            <input className='rounded-xl w-11/12 ml-3 h-12 bg-orange-200' type="email" name="email" />

            <h4 className='gilroy-medium ml-3 mt-2'>Number*</h4>
            <input className='rounded-xl w-11/12 ml-3 h-12 bg-orange-200' name="number" />


            <h4 className='gilroy-medium ml-3 mt-2'>Message*</h4>
            <textarea className='rounded-xl w-11/12 ml-3 h-12 bg-orange-200' type="message" name="message"></textarea>

            <button type="submit" className="mx-6 my-5 w-5/6 bg-orange-500 text-white gilroy-semibold rounded-lg p-2">
              SEND MESSAGE
            </button>

          </form>
          {successMessage && (
            <p className="m-5 border border-4 border-black rounded-md border-dashed text-center text-black gilroy-medium">Thank you for your message. It has been sent</p>
          )}

          {failureMessage && (
            <p className="m-5 border border-4 border-black rounded-md border-dashed text-center text-black gilroy-medium">Failed to send message. Please try again later.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
