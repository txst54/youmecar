import React from "react";
import OrgList from "../../components/Lists/OrgList";

/**
 * If no organization has been chosen by the user, display the orgList
 * Else organization has been selected and show that organization page
 */
export default class App {
    constructor(props) {
        super(props);
        // focusedOrg: the organization that the user selects
        this.state = {
            orgs: [], 
            focusedOrg: null};
    }
    render() {
        <div>
            {this.state.focusedOrg == null ? 
                <GeneralBanner text={"Please select an organization: "}/>
                <OrgList 
                    orgs = {this.state.orgs} 
                    user = {this.props.user}
                    onClick = {(val) => this.setState({focusedOrg: val})}
                /> 
            : ''}
            {this.state.view == "orgPage" ? <OrgPage /> : ''}
        </div>
    }
}