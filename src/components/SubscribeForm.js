import React from 'react';


const SubscribeForm = () => {
    return (
      <div className="subscribe-form-container">
        <form
          action="https://app.us20.list-manage.com/subscribe/post?u=7a3c22e8922f3cd153a9fabbd&amp;id=ff126155b1&amp;f_id=00b8deeaf0"
          method="post"
          target="_self"
          className="subscribe-form"
          noValidate
        >
          <h2 className="subscribe-form-heading">Subscribe</h2>
          <div className="subscribe-form-indicator">
            <span className="asterisk">*</span> indicates required
          </div>
  
          <div className="form-group">
            <label htmlFor="mce-EMAIL" className="form-label">
              Email Address <span className="asterisk">*</span>
            </label>
            <input type="email" name="EMAIL" id="mce-EMAIL" className="form-input" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="mce-FNAME" className="form-label">
              First Name <span className="asterisk">*</span>
            </label>
            <input type="text" name="FNAME" id="mce-FNAME" className="form-input" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="mce-LNAME" className="form-label">
              Last Name <span className="asterisk">*</span>
            </label>
            <input type="text" name="LNAME" id="mce-LNAME" className="form-input" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="mce-PHONE" className="form-label">
              Phone Number
            </label>
            <input type="text" name="PHONE" id="mce-PHONE" className="form-input" />
          </div>
  
          <div className="form-group">
            <label htmlFor="mce-MMERGE7" className="form-label">
              Facebook Link
            </label>
            <input type="text" name="MMERGE7" id="mce-MMERGE7" className="form-input" />
          </div>
  
          <div className="form-group">
            <label htmlFor="mce-MMERGE8" className="form-label">
              Message <span className="asterisk">*</span>
            </label>
            <textarea name="MMERGE8" id="mce-MMERGE8" className="form-textarea" required></textarea>
          </div>
  
          <div aria-hidden="true" className="form-hidden-input">
            <input
              type="text"
              name="b_7a3c22e8922f3cd153a9fabbd_ff126155b1"
              tabIndex="-1"
            />
          </div>
  
          <div className="form-actions">
            <input type="submit" name="subscribe" className="form-submit-button" value="Subscribe" />
          </div>
        </form>
      </div>
    );
  };
  
  export default SubscribeForm;
  
