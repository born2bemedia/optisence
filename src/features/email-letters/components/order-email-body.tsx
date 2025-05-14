import { htmlTemplate } from './html-template';

export const orderEmailBody = ({
  username,
  order,
}: {
  username: string;
  order: { number: string; date: string; services: string; amount?: string };
}) => {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header class="header">
          <img style="padding: 40px" src="https://i.ibb.co/gMXBP3SB/Logo.png" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p class="title">Letter with Order Details</p>
          <p class="text">Dear ${username}</p>
          <p class="text"><b class="strong">Thank you for placing your order with Optisence!</b> WWe’re happy to confirm that your order has been received. Here are the details of your order:</p>
          <ul style="padding-left: 0;">
            <li class="listItem"><span class="listStrong">Order Number:</span> ${order.number}</li>
            <li class="listItem" style="margin-top: 8px;"><span class="listStrong">Order Date:</span> ${order.date}</li>
            <li class="listItem" style="margin-top: 8px;"><span class="listStrong">Services Ordered:</span> ${order.services}</li>
            ${order.amount ? `<li class="listItem" style="margin-top: 8px;"><span class="listStrong">Total Amount:</span> ${order.amount}</li>` : ''}
          </ul>
          <p class="text">You will soon receive an email with instructions for completing your payment. Once the payment is processed, our team will begin working on your project and inform you of its progress.</p>
          <p class="text">Should you have any questions or need any further assistance, please don’t hesitate to let us know. We truly appreciate your business and look forward to delivering outstanding results!</p>
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
              <p class="text" style="width: 210px; font-size: 12px; color: rgba(0, 0, 0, 0.70);">134 Bree Street, Cape Town City Centre, Cape Town, Western Cape, 8000</p>
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

      .listStrong {
        color: #FF572D;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Urbanist;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      .listItem {
        color: rgba(0, 0, 0, 0.70);
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
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
