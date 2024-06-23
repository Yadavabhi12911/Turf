import React from 'react'

function InfoDtlsHeader(props) {

    let tabchange=(obj)=>
    {
        props.settab(obj);
    }

    return (
        <>
        <div>
            <button type="button" className="btn text-white focus:bg-[#6844df] " onClick={event => tabchange('bd')}>Basic Details</button>{' '}
            <button type="button" className="btn text-white  focus:bg-[#6844df]" onClick={event => tabchange('tt')}>Slot Timings</button>
        </div>
        </>
        );
}
export default InfoDtlsHeader;