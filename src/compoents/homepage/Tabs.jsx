import React, {  } from 'react';

const Tabs = ({activeTab,setActiveTab}) => {
    return (
<div className="tabs tabs-box justify-center bg-transparent mb-10">
  <input type="radio" name="my_tabs_1" className="tab rounded-full  w-30" aria-label="Products" checked={activeTab=="Products"} onClick={()=>setActiveTab("Products")}/>

  <input type="radio" name="my_tabs_1" className="tab rounded-full  w-30" aria-label="Cart"  checked={activeTab=="cart"} onClick={()=>setActiveTab("cart")}  />
  
        </div>
    );
};

export default Tabs;