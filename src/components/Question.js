import React from 'react'
import { Divider, Button, Header } from 'semantic-ui-react'

import QuestionHeader from './QuestionHeader'
import QuestionBox from './QuestionBox'
import QuestionOptions from './QuestionOptions'


const Question = (props) => {
  return (
    <React.Fragment>
      <Header as="h1" color={(props.darkMode === false) ? 'black' : 'grey'}>
      React Quiz
      </Header>

      <QuestionBox questions={props.questions} checkArray={props.checkArray} end={false} darkMode={props.darkMode}/>

      <Divider />

      <QuestionHeader counter={props.counter} question={props.question}/>

      <QuestionOptions options={props.options} darkMode={props.darkMode} handleClick={props.handleClick} />
      </React.Fragment>
  )
}

export default Question
