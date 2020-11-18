import React, {Component} from 'react';

// Import Materialize
import M from "materialize-css";
import Profile from './Profile';

class NavBar extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    
    render() {
        return(
        <div>
            <h1>App Name(Logo)</h1>
          <div className="input-field col s12">
            <select>
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Announcements</option>
              <option value="2">Schedule</option>
              <option value="3">Message Board</option>
            </select>
            <label>Materialize Select</label>
          </div>

          <Profile />
        </div>
        )
    }
}

export default NavBar;