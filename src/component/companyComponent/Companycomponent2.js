import React from "react";
import img6 from "../assets/img6.svg";
import Company_cards from "../companyComponent/companycards/Company_cards"

const Companycomponent2 = () => {
   return (
     <div className="container-fluid">
       <div className="company_header">
         <div className="company_img">
           <img src={img6} alt="" />
         </div>

         <div className="company_style">
           <div className="company_heading">
             <span>company</span>
             <span> 2 </span>
           </div>
         </div>
         <div className="company_subheading">
           <h2 className="company_h2">
             Collaborating with GFG enables us to tap into their extensive
             expertise in software engineering, advanced technology, and
             outstanding sector standards.
           </h2>
         </div>
       </div>
       <div className="company_card">
         <div className="card_style">
           <Company_cards />
         </div>
       </div>
     </div>
   );
};

export default Companycomponent2;
