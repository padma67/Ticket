import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agentlist: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4040/contacts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ agentlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
        <div>
        <table style={{border:"1px solid",borderLeft:"none",borderRight:"none",borderSpacing:"15px"}}>
        <tr ><th>Firstname</th><th>lastname</th><th>phone</th><th>email</th></tr>
          {this.state.agentlist.map((agent, index) => (
            <tr key={index}>
           
              <td>{agent.name.first}</td> <td>{agent.name.last}</td> <td>{agent.mobile}</td> <td>{agent.email}</td></tr>
            
          ))}
        </table>
      </div>
    );
  }
}

export default Contact;