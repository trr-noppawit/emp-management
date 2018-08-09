import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import {
  fetchMasterTableRequest,
} from '../../actions/masterTable';
import Loader from '../../components/Loader';
import MasterTable from '../../components/MasterTable';

const MasterTablePage = ({ isFetching, masterTable }) => (
  <div>
    {isFetching ? <Loader /> : <MasterTable
      masterTable={masterTable}
    />}
  </div>
);

MasterTablePage.defaultProps = {
  isFetching: true
};

MasterTablePage.propTypes = {
  isFetching: PropTypes.bool,
  masterTable: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isFetching: state.masterTable.isFetching,
  masterTable: state.masterTable,
  selected: state.masterTable.selected
});

const mapDispatchToProps = dispatch => ({
  fetchMasterTable: () => dispatch(fetchMasterTableRequest())
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { fetchMasterTable } = this.props;
      fetchMasterTable();
    }
  })
);

export default enhance(MasterTablePage);
