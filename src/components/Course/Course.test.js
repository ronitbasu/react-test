import React from 'react';
import Course from './Course'
import ReactDOM from 'react-dom';
import {render, fireEvent} from '@testing-library/react';


it('successful render', () => {
    const course = {
      "days": "MWF",
      "hours": {
        "end": 710,
        "start": 660
      },
      "id": "F101",
      "meets": "MWF 11:00-11:50",
      "title": "Computer Science"
    };
    const state = {
      "selected": []
    };
    const toggle = (x) => {
      setSelected(selected.includes(x) ? selected.filter(y => y !== x) : [x].concat(selected))
    };
    state.toggle = toggle;
    const div = document.createElement('div');
    ReactDOM.render(<Course course={course} state= {state} />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('button clickable', () => {
    const div = document.createElement('div');
    const course = {
      "days": "MWF",
      "hours": {
        "end": 710,
        "start": 660
      },
      "id": "F101",
      "meets": "MWF 11:00-11:50",
      "title": "Computer Science"
    };
    const state = {
      "selected": []
    };
    const toggle = (x) => {
      state.selected = [true];
    };
    state.toggle = toggle;
    const {getByText, getByTestId, container} = render(<Course course={course} state= {state} data-testid="Course"
 />, div);
    fireEvent.click(getByTestId("markAsCompleted"));
    const elem = getByTestId("markAsCompleted");
    console.log(elem.innerHTML);
    expect(elem.innerHTML).toBe("Fall CS 101: Computer Science");
})
