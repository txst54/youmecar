import React from "react";
import EventList from "../components/Lists/EventList";

export default class App {
    constructor(props) {
        super(props);
        this.state = {
            focusedEvent: null
        };
    }
    render() {
        return(
            <div>
                <section>
                    <div>{this.props.org.name}</div>
                    <div>{this.props.org.desc}</div>
                </section>
                <section>
                    <EventList 
                        events={this.props.org.events} 
                        user={this.props.user} 
                        onClick={(val) => this.setState({focusedEvent: val})}
                    />
                </section>
            </div>
        );
    }
}