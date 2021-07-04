import React,{useState} from "react";

const NewsletterSubscription = () => {

    const [email,setEmail]= useState("");
    
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(email)
    }
  return (
    <div>
      <form
        id="mailchimp-subscription-form-footer"
        className="newsletter-form"
      >
        <div className="input-group">
          <input
            type="email"
            value={email}
            name="EMAIL"
            placeholder="Your Email"
            className="form-control input-lg font-16"
            data-height="45px"
            id="mce-EMAIL-footer"
            style={{ height: "45px" }}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <span className="input-group-btn">
            <button
              data-height="45px"
              className="btn btn-colored btn-theme-colored btn-xs m-0 font-14"
              type="submit"
              style={{ height: "45px" }}
            onClick={submitHandler}
            >
              Subscribe
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
