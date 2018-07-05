import React from 'react';
import PropTypes from 'prop-types';
// import Modal from '../../components/modal';
import {
  Segment,
  Grid,
  Container,
  Pagination,
  Icon,
  Form,
  Radio,
  Checkbox,
  Button,
  TextArea,
  Header,
} from 'semantic-ui-react';

const questionRenderer = question => (
  <div dangerouslySetInnerHTML={{ __html: question }} />
);

const TakeExam = ({
  examList,
  currentActivePage,
  onPageChange,
  categoryTitle,
  pickedAnswer,
  answerList,
  onClickRadio,
  onClickCheckbox,
  onInputTextArea,
  onClickSave,
  onClickSubmit,
  exId,
  id, }) =>
  (
    <Segment.Group>
      <Segment>
        <Grid>
          <Grid.Column width={12}>
            <Header>{categoryTitle}</Header>
          </Grid.Column>
          <Grid.Column width={2}>
            <Container textAlign="right"><h2>Timer</h2></Container>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        {examList && examList.map((row, i) => (
          i === currentActivePage - 1 ?
            <Form>
              <h1>Question {currentActivePage}</h1>{questionRenderer(row.exQuestion)}<br />
              {row.exType === 'Choices' && row.exChoice.map(answer => (
                row.exAnswer.length === 1 ?
                  <Form.Field>
                    <p>
                      <Radio
                        label={answer}
                        value={answer}
                        checked={pickedAnswer.includes(answer)}
                        onClick={(e, { value }) => {
                          onClickRadio(value, currentActivePage, pickedAnswer, exId);
                        }}
                      />
                    </p>
                  </Form.Field> :
                  <Form.Field>
                    <p>
                      <Checkbox
                        label={answer}
                        value={answer}
                        checked={pickedAnswer.includes(answer)}
                        onClick={(e, { value }) => {
                          onClickCheckbox(value, currentActivePage, pickedAnswer, exId);
                        }}
                      />
                    </p>
                  </Form.Field>
              ))}
              {row.exType !== 'Choices' &&
                <Form.Field>
                  <TextArea
                    value={pickedAnswer}
                    placeholder="Type the answer here.."
                    onInput={(e, { value }) => {
                      onInputTextArea(value, answerList, currentActivePage, pickedAnswer, exId);
                    }}
                  />
                </Form.Field>
              }
            </Form> : ''
        ))}
        {!examList && (
          <h1>Fetch fail somewhere!</h1>
        )}
      </Segment>
      <Segment>
        <Button primary icon labelPosition="left" onClick={() => onClickSave(id, categoryTitle, answerList)}>
          <Icon name="save" />
          Save
        </Button>
        <Button secondary icon labelPosition="right" onClick={() => onClickSubmit(id, categoryTitle, answerList)}>
          <Icon name="send" />
          Submit
        </Button>
        <Pagination
          onPageChange={(e, { activePage }) => onPageChange(activePage)}
          floated="right"
          defaultActivePage={1}
          boundaryRange={1}
          siblingRange={0}
          ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
          firstItem={{ content: <Icon name="angle double left" />, icon: true }}
          lastItem={{ content: <Icon name="angle double right" />, icon: true }}
          prevItem={{ content: <Icon name="angle left" />, icon: true }}
          nextItem={{ content: <Icon name="angle right" />, icon: true }}
          totalPages={examList.length}
        />
      </Segment>
    </Segment.Group>
  );

TakeExam.propTypes = {
  examList: PropTypes.array.isRequired,
  currentActivePage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
  categoryTitle: PropTypes.string.isRequired,
  pickedAnswer: PropTypes.array.isRequired,
  answerList: PropTypes.array.isRequired,
  onClickRadio: PropTypes.func.isRequired,
  onClickCheckbox: PropTypes.func.isRequired,
  onInputTextArea: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  exId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default TakeExam;
