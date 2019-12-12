import React from 'react';
import Course from './Course'
import ReactDOM from 'react-dom';

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
    const div = document.createElement('div');
    ReactDOM.render(<Course course={course} state= {state} />, div);
    ReactDOM.unmountComponentAtNode(div);
})
