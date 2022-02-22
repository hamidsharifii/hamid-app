import React, { Component } from "react";

class Alarm extends Component {
  render() {
    return (
      <div style={{width:'50%'}}>
        <div style={{display:'flex', marginTop: 50}} >
          <div style={{marginLeft:10}}>name:</div>
          <input style={{marginLeft:20, marginTop:5, width:180}}  type='text'
          />
        </div>

        <div style={{display:'flex', marginTop: 15}} >
          <div style={{marginLeft:10}}>Mode:</div>
          

          <select name="alarm-mode" id="mode-select" style={{marginLeft:15, marginTop:5, width:200}}>
           <option value="Off">Off</option>
           <option value="Alarm">Alarm</option>
           <option value="Control">Control</option>
    
  
          </select>
        </div>
        <div style={{display:'flex', marginTop: 15}} >
          <div style={{marginLeft:10}}>Type:</div>
          <input style={{marginLeft:20, marginTop:5, width:180}}  type='text'
          />
        </div>
        
      </div>
    )
  }
 }

 export default Alarm;