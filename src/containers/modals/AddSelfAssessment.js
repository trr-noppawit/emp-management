import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { updateProfileRequest, updateProbationStore, clearProbationStore} from '../../actions/profile';
import Modal from '../../components/EvaluationModal';
import A from '../pages/ProbationForm'
import Loader from '../../components/Loader';

class AddSelfAssessment extends React.Component{
  constructor(props){
    super(props);
    this.state = props;
    this.type = (this.props.profile.eva == null ? 'addProbation':'updateProbation')
  }
  componentDidMount(){
    console.log(this.state.edited);
  }
  render(){
    return(
      <div>
        {this.props.fetching ? <Loader/> :
          <Modal
            header={this.props.profile.eva == null ? 'Add Probation':'View Probation'}
            onClose={()=>{this.props.onClose()}}
            onClick={()=>{}}
            submitting={false}
            size="large"
            disable={true}
          >
            <A test={this.props.onChange} profile={this.props.profile}/>
          </Modal>
        }
      </div>
    );
  }
}

AddSelfAssessment.defaultProps = {
  submitting: false,
  edited: false
};

AddSelfAssessment.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  type: state.auth.type,
  item: state.profile.item,
  modalName: state.modal.name,
  profile: state.profile,
  submitting: state.profile.submitting,
  edited: state.profile.edited,
  fetching: state.profile.proFetching
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearProbationStore()),
  onClose: () => dispatch(closeModal()),
  onSubmit: (item,type) =>  (new Promise((resolve,reject)=> (
    dispatch(updateProfileRequest(item,resolve,reject,type))
  ))),

  onClick: () => dispatch(submit('addProbationProfile')),
  onChange: (item) => dispatch(updateProbationStore(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSelfAssessment);