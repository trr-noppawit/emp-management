import React from 'react';
import './css/SupervisorCommentComponent.css'

class SupervisorCommentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { supervisorComment: props.supervisorComment };
    }

    componentWillReceiveProps(props) {
        this.setState({ supervisorComment: props.supervisorComment });
    }

    render() {
        return (
            <div className='sup-comment'>
                <span className='blue-text'>Summary Comments by Supervisors:</span>
                <textarea onChange={(event) => this.props.onChange(event.target.value)}>{this.state.supervisorComment}</textarea>
            </div>
        );
    }
}

export default SupervisorCommentComponent;
