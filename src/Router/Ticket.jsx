import React from "react";

class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agentlist: [],
      contactlist:[],
      ticketlist:[]
    };
  }

  componentDidMount() {
    fetch("http://localhost:4040/tickets")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ticketlist: data });
        return  fetch("http://localhost:4040/contacts")
      })
      .then((res1) => res1.json())
      .then((data1) => {
        this.setState({ contactlist: data1 });
        return  fetch("http://localhost:4040/agents")
      })
      .then((res2) => res2.json())
      .then((data2) => {
        this.setState({ agentlist: data2});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getName=(arr,id)=>{
    let name=arr.find(data=>data.id===id)
    if(name===undefined)return ""
    return name.name.first+""+name.name.last
  }

  render() {
    return (
      <div>
        <table style={{border:"1px solid",borderLeft:"none",borderRight:"none",borderSpacing:"15px"}}>
        <tr ><th>subject</th><th>description</th><th>contactId</th><th>agentid</th></tr>
          {this.state.ticketlist.map((ticket,index) =>  (
            <tr key={index}>
           
          <td>{ticket.subject}</td><td>{ticket.description}</td>
          <td>{this.getName(this.state.contactlist,ticket.contactId)}</td>
          <td>{this.getName(this.state.agentlist,ticket.agentId)}</td></tr>
            
          ))}
        </table>
      </div>
    );
  }
}

export default Ticket;