import React, { Component } from 'react';
import axios from 'axios';

class Viewer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    async componentDidMount() {
        const { data: items } = await axios.get("/users");
        this.setState({
                      isLoaded: true,
                      items: items
                    });
    }
    
    handleRefresh = async (event) => {
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
                 <input type="push" className="btn btn-secondary btn-sm" defaultValue="Refresh" onClick={ this.handleRefresh } />
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

  export default Viewer;