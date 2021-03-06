import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props){
    super(props);
    this.state={
      vehicles:[],
      value:"",
      pilot:""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange(event){
    this.setState({
      value: event.target.value
    })
  }



  // FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit = (event)=>{
    event.preventDefault()
    let pilotName = this.state.value
    this.setState({
      pilot: pilotName,
      value:""
    })


  };

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentDidMount(){
    // console.log(this);
    fetch('https://swapi.co/api/vehicles/')
    .then((response)=>{
      // console.log(response);
      return response.json()
    }).then((json) =>{
      let vehicles = json.results
      // console.log(vehicles);
      this.setState({vehicles: vehicles})
    })

  }



  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    return(
      <div className="App">
         <div className="jumbotron">
           <h1 className="display">Star Wars</h1>
           <h3>The vehicles of Star Wars</h3>
         </div>
         <form className="form" onSubmit={this.handleSubmit}>
           <label>What is your name, pilot?</label><br />
           <input className="form_name" type="text" name="name" placeholder="Enter Yout Name" onChange={this.handleNameChange} />
           <input type='submit' name='Submit' value="Submit" />
           <h4><strong>{this.state.pilot}</strong></h4>
         </form>

         <div className="vehicles">
           {this.state.vehicles.map((vehicle)=>{
             return(
               <div className="card"  key={vehicle.name}>
                 <div className="card-block">
                   <h4 className="card-title">Vehicle: {vehicle.name}</h4>
                   <p className="card-text">Model: {vehicle.model}</p>
                   <p className='card-text'> Specs</p>
                   <ul className="list-group list-group-flush">
                     <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                     <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
                     <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                     <li className="list-group-item">Crew: {vehicle.crew}</li>
                     <li className="list-group-item">Length: {vehicle.length}</li>
                     <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
                     <li className="list-group-item">Cargo Capacity: {vehicle.cargo_capacity}</li>
                   </ul>
                 </div>
               </div>
             )})}
           </div>
         </div>
       )
     }
   }
   export default App;
