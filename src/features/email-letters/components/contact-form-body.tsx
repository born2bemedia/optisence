import { htmlTemplate } from './html-template';

export const contactFormBody = ({ username }: { username: string }) => {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header class="header">
          <img style="padding: 40px" src="https://i.ibb.co/gMXBP3SB/Logo.png" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p class="title">We’ve Received Your Inquiry – Thank You for Contacting Optisence!</p>
          <p class="text">Dear ${username}</p>
          <p class="text"><b class="strong">Thank you for reaching out to Optisence!</b> We’ve received your inquiry, and our team is reviewing your request. You’ll hear from us within 24 hours with the information and support you need.</p>
          <p class="text">If you have any questions or would like to provide more details, please respond to this email. We’re eager to help you and look forward to collaborating on your business goals.</p>
          <p class="text">Best regards,<br/><b class="strong">The Optisence Team</b></p>
        </div>
        <footer class="footer">
          <span>
            <img src="https://i.ibb.co/RGFDXMsz/Logo-1.png" alt="full-logo" class="logoSm" />
            <p class="text" style="margin-top: 8px; font-size: 12px">For precise ranking and competitive analysis.</p>
          </span>
          <span style="margin-left: auto; display: flex">
            <div>
              <p class="heading">Email:</p>
              <a class="text" href="mailto:info@optisence.com" style="color: rgba(0, 0, 0, 0.70); font-size: 12px">info@optisence.com</a>
            </div>
            <div style="margin-left: 40px">
              <p class="heading">Address:</p>
              <p class="text" style="width: 210px; font-size: 12px">134 Bree Street, Cape Town City Centre, Cape Town, Western Cape, 8000</p>
            </div>
          </span>
        </footer>
      </div>
    `,
    style: `
      .wrapper {
        padding: 8px;
        width: 696px;
        margin: 0 auto;
        background: #F5F5F5;
      }
      
      .main {
        margin: 8px 0;
        padding: 40px 40px 160px 40px;
        border-radius: 12px;
        background: #FFF;
      }
      
      .header {
        overflow: hidden;
        border-radius: 12px;
        background: #FF572D;
        display: flex;
      }
      
      .strong {
        font-weight: 600;
        color: #000;
      }
      
      .title {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .heading {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .text {
        color: rgba(0, 0, 0, 0.70);
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
      }
      
      .logo {
        width: 159px;
        height: 40px;
      }
      
      .logoSm {
        width: 157px;
        height: 40px;
      }
      
      .footer {
        display: flex;
        border-radius: 12px;
        background: #FFE6E0;
        padding: 20px;
      }
    `,
  });
};
