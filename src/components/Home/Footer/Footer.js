import React from 'react';
import '../Home/Home.css';

const Footer = () => {
    return (
        // <div className="footer-container container-fluid px-5 pt-5" style={{backgroundColor:"#FBD062"}}>
        //     <div className="row mb-5 p-5">
        //         <div className="footer-text col-md-6 px-5">
        //             <h3>Let us handle your project, professionally.</h3>
        //             <small className="text-secondary">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small>
        //         </div>
        //         <div className="col-md-6">
        //           <form>
        //             <div class="form-group">
        //               <input type="email" placeholder="Your email address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        //             </div>
        //             <div class="form-group">
        //               <input type="password" placeholder="Your name/ company's name" class="form-control" id="exampleInputPassword1"/>
        //             </div>
        //             <div class="form-group">
        //               <textarea placeholder="Your message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        //             </div>
        //             <button type="submit" class="btn btn-black">Submit</button>
        //           </form>
        //         </div>
        //     </div>
        //     <div className="text-center pb-3"><small className="text-secondary">copyright Orange labs 2020</small></div>
        // </div>

        <div class="container-fluid" style={{backgroundColor:"#FBD062"}}>
          <div className="row py-5">
            <div className="footer-text col-md-6 p-5">
              <h3 className="px-5">Let us handle your project, professionally.</h3>
              <p className="px-5 text-secondary">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6">
              <form>
                <div class="row">
                  <div class="col-75">
                    <input type="text" name="email" placeholder="Your email address"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-75">
                    <input type="text" name="name" placeholder="Your name/ Company's name"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-75">
                    <textarea id="subject" name="message" placeholder="Your message" style={{height:"200px"}}></textarea>
                  </div>
                </div>
                <div class="row">
                  <button className="w-25 btn btn-black">Send</button>
                </div>
            </form>
            </div>
          </div>
          <div className="text-center pb-3"><small className="text-secondary">copyright Orange labs 2020</small></div>
        </div>
    );
};

export default Footer;

