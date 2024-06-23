import React from 'react'

function ViewAlias(props) {
    let viewtype=async ()=>
    {
        await props.setcred({
            type:props.dtls.title,
            userid:"",
            password:"",
            logintype:"Login",
            tokenid:""
        });
        document.getElementById("clickbutton").click();
    }
    return (
        <>
        <div className="userviewcss  ">
            <h4 className='text-green-500 font-extrabold text-4xl  py-2 ' style={{ fontWeight: 'bold' }}>{props.dtls.title}</h4> 
            <h4>{props.dtls.desc}</h4> 
            <button type="button" className="btn btn-secondary  my-2 bg-blue-600 hover:bg-blue-700" onClick={viewtype}>{props.dtls.button}</button>
        </div>
        </>
    );
}
export default ViewAlias;