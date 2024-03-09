import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const openMail = () => {
  window.location.href = 'mailto:brainboost@gmail.com';
};

const openPhone = () => {
  window.location.href = 'tel:+918568565865';
};

const openLocation = () => {
  window.location.href = 'geo:0,0?q=123+Street,+Mumbai,+India';
};

export default function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div style={{ paddingBottom: '6rem' }}> 
        
      </div>
      <MDBFooter bgColor='#7D0DC3' className='text-center text-lg-left' style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <div className='container p-4'>
          <div className='row'>
            <div className='col-lg-4' onClick={openMail} style={{ cursor: 'pointer' }}>
              <h5 className='mb-4'><FaEnvelope /> Email</h5>
              <p>brainboost@gmail.com</p>
            </div>
            <div className='col-lg-4' onClick={openPhone} style={{ cursor: 'pointer' }}>
              <h5 className='mb-4'><FaPhone /> Phone</h5>
              <p>+91 8568565865</p>
            </div>
            <div className='col-lg-4' onClick={openLocation} style={{ cursor: 'pointer' }}>
              <h5 className='mb-4'><FaMapMarkerAlt /> Address</h5>
              <p>123 Street, Mumbai, India</p>
            </div>
          </div>
        </div>
        <div className='text-center p-3' style={{ backgroundColor: '#cc87e6' }}>
          &copy; {new Date().getFullYear()} Brain Boost
        </div>
      </MDBFooter>
    </div>
  );
}
