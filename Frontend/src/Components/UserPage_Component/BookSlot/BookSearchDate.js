import React from 'react'

class BookSearchDate extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        };   
    }

    render() {
        return (
            <> 
            <div>
            <div style={{textAlign:"center"}}>
                <input type="date" className="btn" value={this.props.bookingdate} onChange={this.props.datechangefunc}/>
                <button type="button" className="btn inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200" onClick={this.props.fetchturfs}><span className="glyphicon glyphicon-search"></span></button>
            </div>
            </div>
            </>
            );   
    }
  }

export default BookSearchDate;