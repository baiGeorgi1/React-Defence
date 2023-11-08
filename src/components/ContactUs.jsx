export default function ContactUs() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div className="col-md-10 offset-md-1 ">
            <form id="request" className="main_form">
              <div className="row">
                <div className="col-md-6 ">
                  <input
                    className="contactus"
                    placeholder="Full Name"
                    type="type"
                    name=" Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="contactus"
                    placeholder="Email"
                    type="type"
                    name="Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="contactus"
                    placeholder="Phone Number"
                    type="type"
                    name="Phone Number"
                  />
                </div>
                <div className="col-md-6">
                  <textarea
                    className="textarea"
                    placeholder="Message"
                    type="type"
                    name="Message"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button className="send_btn">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
