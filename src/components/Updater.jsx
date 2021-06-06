import axios from 'axios';
import React, { Component } from 'react';

class Updater extends Component {
    state = { 
        firstName: '',
        surName: '', 
        email: '',
    };
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const {firstName, surName, email} = this.state;
        const user = {
            firstName: firstName, 
            surName: surName,
            email: email,
        }
        const { data:post } = await axios.post("/users", user); 
    }
    
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">First Name</label>
                            <input type="text" className="form-control" id="inputEmail4" 
                                    placeholder="First Name" onChange={(e) => { this.setState({firstName: e.target.value}); }}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Second Name</label>
                            <input type="text" className="form-control" id="inputPassword4"
                                    placeholder="Second Name" onChange={(e) => { this.setState({surName: e.target.value}); }}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" 
                                aria-describedby="emailHelp" placeholder="Enter email" 
                                onChange={(e) => { this.setState({email: e.target.value}); }}/>
                    </div>
                    <input type="submit" className="btn btn-secondary btn-sm" value="Post" />
                </form>
            </React.Fragment>
        );
    }
}
 
export default Updater;