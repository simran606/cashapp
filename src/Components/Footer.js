import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Styles/Footer.css';

const bdata = [
  {
    src: "../../Images/vectoro.png",
    text: "APP STORE"
  },
  {
    src: "../../Images/Vector (1).png",
    text: "GOOGLE PLAY"
  }
]

function Footer() {
  return (
    <div className="footer-div">
      <div>
      {bdata.map((item) => {
      return(
          <Button >
            <img className="icon" src={item.src} alt="bg-img" />
            {item.text}
          </Button>
        
      );
      })}
      </div>
      <img className="arrow" src="../../Images/Vector (2).png" alt="bg-img" />
      <p className="footp">Brokerage services by Cash App Investing LLC, member FINRA / SIPC. <br/>
        See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin <br/>
        trading offered by Cash App. Cash App Investing does not trade bitcoin and <br/>
        Cash App is not a member of FINRA or SIPC. Cash App facilitates banking <br/>
        services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
      <div>
        <img className="f-icon" src="../../Images/Frame (2).png" alt="bg-img" />
        <img className="f-icon" src="../../Images/Frame (3).png" alt="bg-img" />
        <img className="f-icon" src="../../Images/Frame (4).png" alt="bg-img" />
      </div>

    </div>
  )
}

export default Footer;