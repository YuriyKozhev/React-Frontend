import React, { Component } from 'react';
import axios from 'axios';

class Filter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        filter: "",
        items: []
      };
    }

    async componentDidMount() {
        const { data: items } = await axios.get(`/users?firstName=${this.state.filter}`);
        this.setState({
                      isLoaded: true,
                      items: items
                    });
    }
    
    handleSubmit = async (event) => {
        this.componentDidMount();
        event.preventDefault();
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      console.log(error);
      console.log(isLoaded);
      console.log(items);
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputFilter">First Name</label>
                        <input type="text" className="form-control" id="exampleInputFilter" 
                                placeholder="Enter first name" 
                                onChange={(e) => { this.setState({filter: e.target.value}); }}/>
                    </div>
                    <input type="submit" className="btn btn-secondary btn-sm" value="Search" />
                </form>
                <ul>
                    {items.map(item => (
                    <li key={item.id}>
                        {item.email} {item.firstName} {item.surName}
                    </li>
                    ))}
                </ul>
          </React.Fragment>
        );
      }
    }
  }

  export default Filter;