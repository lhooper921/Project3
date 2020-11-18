import React, { Component } from 'react';

// Import Materialize
import M from "materialize-css";

class Profile extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col s12 m4">
                        <div class="card blue blue darken-2">
                            <div class="card-content white-text">
                                <span class="card-title">Employee Name</span>
                                <p>Employee Title</p>
                            </div>
                            <div class="card-action">
                                <a href="#">Send Message</a>
                                <a href="#">View Schedule</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m4">
                        <div class="card blue blue darken-2">
                            <div class="card-content white-text">
                                <span class="card-title">Employee Name</span>
                                <p>Employee Title</p>
                            </div>
                            <div class="card-action">
                                <a href="#">Send Message</a>
                                <a href="#">View Schedule</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m4">
                        <div class="card blue blue darken-2">
                            <div class="card-content white-text">
                                <span class="card-title">Employee Name</span>
                                <p>Employee Title</p>
                            </div>
                            <div class="card-action">
                                <a href="#">Send Message</a>
                                <a href="#">View Schedule</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;