import React from 'react';
import ReactDOM from 'react-dom';
import MenuApp from '../components/MenuApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MenuApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
