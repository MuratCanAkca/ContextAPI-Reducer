import React from 'react'
import {Button , ButtonGroup, Container} from "reactstrap"
import { useStore } from '../store'
import {counterDown , counterUp} from "../store/counter/counter.actions"


const HomePage = () => {

  const {counterState , dispatchCounter} = useStore();
  const {counter} = counterState;

  const handleCounterDown = () => {
    dispatchCounter(counterDown());
  }

  const handleCounterUp = () => {
    dispatchCounter(counterUp());
  }

  return (
   <Container className='mt-5'>
      <ButtonGroup>
        <Button color="danger" onClick={handleCounterDown}>Left</Button>
        <Button color="secondary" disabled>{counter}</Button>
        <Button color="success" onClick={handleCounterUp}>Right</Button>
      </ButtonGroup>
   </Container>
  )
}

export default HomePage