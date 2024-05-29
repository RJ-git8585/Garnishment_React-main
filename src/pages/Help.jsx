// eslint-disable-next-line no-unused-vars
import React from 'react'
import Headertop from '../component/Headertop'
import Sidebar from '../component/sidebar'


function Help() {


  return (
    <>
    <div className="min-h-full">
       <Headertop />
       <div className="container main ml-auto mt-6">
       <div className='sidebar'><Sidebar/></div>
       <div className="contant content ml-auto mt-6">
      
  <h1>Garnishment Support Center</h1>
  <h2>Frequently Asked Questions (FAQs)</h2>
  <ul>
    <li>
      <h3>What is garnishment?</h3>
      <p>Garnishment is a legal process where a creditor can take money from your wages, bank account, or other sources to pay off a debt.</p>
    </li>
    <li>
      <h3>What types of income can be garnished?</h3>
      <p>Wages, bank accounts, and Social Security benefits are some common types of income that can be garnished, depending on the type of debt and applicable laws.</p>
    </li>
    <li>
      <h3>How much of my income can be garnished?</h3>
      <p>There are legal limits on how much of your income can be garnished. You can find more information about these limits by referring to relevant laws in your area.</p>
    </li>
    <li>
      <h3>I have general questions about my specific situation.</h3>
      <p>For specific legal advice, please contact a qualified attorney.</p>
      <p>We also offer a contact form for general inquiries: <a href="contact.html">Contact Us</a></p>
    </li>
  </ul>
  <h2>Resource Library</h2>
  <ul>
    <li><a href="blog/">Blog posts with legal updates, budgeting tips, and debt management strategies</a></li>
    <li><a href="guides/">Downloadable guides on managing garnishment and protecting yourself financially</a></li>
    <li><a href="glossary.html">Glossary of terms related to garnishment</a></li>
  </ul>
  <p>**Disclaimer:** The information provided on this website is for general informational purposes only and does not constitute legal advice. Please consult with an attorney for specific legal guidance.</p>



    </div>
    </div>
    </div>
    </>
  )
}

export default Help 