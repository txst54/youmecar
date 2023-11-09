import React from "react";
import OrgList from "../../components/Lists/OrgList";
import EventList from "../../components/Lists/EventList";
import Banner from "../../components/PageComponents/Banners/Banner";

/**
 * If no organization has been chosen by the user, display the orgList
 * Else organization has been selected and show that organization page
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        // focusedOrg: the organization that the user selects
        this.state = {
            orgs: [], 
            focusedOrg: null};
    }
    render() {
        return(
            <div className="bg-youmeblue h-screen">
                {
                // if user has NOT selected an organization
                this.state.focusedOrg == null ? 
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <div className="h-8 text-center text-slate-700 text-base font-large font-['Avenir']">Choose Your Organization</div>
                            <div className="mb-4 w-60 h-px border border-slate-700"></div>
                        </div>
                        <div>
                            <OrgList 
                                orgs = {this.state.orgs} 
                                user = {this.props.user}
                                role = {this.props.role}
                                onClick = {(val) => this.setState({focusedOrg: val})}
                            /> 
                        </div>
                    </div>
                : ''}
                {
                // if user HAS selected an organization but NOT an event
                this.state.focusedOrg != null && this.state.focusedEvent == null ? 
                    <div>
                    <Banner title={this.state.focusedOrg.name} subtitle={this.state.focusedOrg.desc}/>
                    <EventList 
                        events = {this.state.focusedOrg.events}
                        user = {this.props.user}
                        onClick = {(val) => this.setState({focusedEvent: val})}
                    />
                    </div> 
                : ''}
                {
                this.state.focusedOrg != null && this.state.focusedEvent != null ?
                    <div>
                        <Banner title={this.state.focusedEvent.name} subtitle={this.state.focusedEvent.desc} />
                        {/* Add Location Dropdown and Car Box thingy */}
                    </div>
                : ''}

            </div>
        );
    }
}