import React from 'react'
import { BASE_URL } from '../../../Url';

class UserProfileBottom1 extends React.Component {
    constructor(props) {
        super(props);
        this.alertboxcontentfunc=this.alertboxcontentfunc.bind(this);
        this.validateinput=this.validateinput.bind(this);
        this.saveprofile=this.saveprofile.bind(this);
        this.editprofile=this.editprofile.bind(this);
        this.state={
        };   
    }

    alertboxcontentfunc(title,body){
        this.props.setalertboxcontent({
            title:title,
            body:body
        });
    }

    validateinput()
    {
        if(this.props.profile.username===""||this.props.profile.emailid===""||this.props.profile.phoneno===""||this.props.profile.phoneno.length!==10)
        {
            return false;   
        }
        return true;
    }

    saveprofile()
    {
        if(this.validateinput()===false)
        {
            this.alertboxcontentfunc("User - PROFILE","Please Fill in Entire Details");
            document.getElementById("alertboxhit").click();
            return;
        }
        fetch(BASE_URL+'/userprofile/save',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                tokenid:this.props.cred.tokenid,
                profile:this.props.profile
            })})
         .then((res) => res.json())
         .then( async (data) => {
            if(data.Status==="Success")
            {
                this.props.setsaveeditbutton("Edit");
                this.alertboxcontentfunc("User - PROFILE",data.Message);
                document.getElementById("alertboxhit").click();
            }
            else
            {
                this.alertboxcontentfunc("User - PROFILE",data.Message);
                document.getElementById("alertboxhit").click();
            }
         })
         .catch((err) => {       
            this.alertboxcontentfunc("User - PROFILE","Error in processing the data");
            document.getElementById("alertboxhit").click(); 
         });
    }

    editprofile()
    {
        if(this.validateinput()===false)
        {
            this.alertboxcontentfunc("User - PROFILE","Please Fill in Entire Details");
            document.getElementById("alertboxhit").click();
            return;
        }
        fetch(BASE_URL+'/userprofile/edit',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                tokenid:this.props.cred.tokenid,
                profile:this.props.profile
            })})
         .then((res) => res.json())
         .then( async (data) => {
            if(data.Status==="Success")
            {
                this.alertboxcontentfunc("User - PROFILE",data.Message);
                document.getElementById("alertboxhit").click();
            }
            else
            {
                this.alertboxcontentfunc("User - PROFILE",data.Message);
                document.getElementById("alertboxhit").click();
            }
         })
         .catch((err) => {   
            this.alertboxcontentfunc("User - PROFILE","Error in processing the data");
            document.getElementById("alertboxhit").click();    
         });
    }

    render() {
        return (
            <>
            <div style={{textAlign:"right"}}>
                {this.props.saveeditbutton==="Save" && <button type="button" className=" button type1 inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200" onClick={this.saveprofile}><span class="btn-txt inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">Save</span></button>}
                {this.props.saveeditbutton==="Edit" && <button type="button" className="btn inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200" onClick={this.editprofile}>Edit</button>}
            </div>
            </>
            );   
    }
  }

export default UserProfileBottom1;