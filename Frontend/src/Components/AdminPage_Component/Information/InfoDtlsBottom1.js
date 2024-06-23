import React from 'react'

function InfoDtlsBottom1(props) {

    let slidechange=()=>
    {
        props.settab("tt");
    }

    return (
        <>
        <div style={{textAlign:"right"}}>
            <button type="button" className="btn inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200" onClick={(event)=>slidechange()}>Next</button>
        </div>
        </>
        );
}
export default InfoDtlsBottom1;