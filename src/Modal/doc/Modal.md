Modals are meant to "take over" the screen and focus users attention on a dialog which presents the user with an opportunity to add, modify or create content. A modal should always be centered both vertically and horizontally within the browser window. When a modal is opened, the interface darkens and disables all other user interface elements in order to force a user to take an action required by their workflow. Two modals can't be open at once.

Note: A modal requires the `appElement` prop to be aria-compliant. Details on how to set this property can be found at http://reactcommunity.org/react-modal/accessibility/

Example: Create a DOM element dynamically and pass it via `appElement` prop to `Modal`

**`ModalExample.js`**

`
import React from 'react';
import Modal from 'calcite-react';
export class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    render() {
        <Modal appElement={this.el}></Modal>
    }
}
` 

Example: Pass an existing DOM element via `appElement` prop to `Modal`

**`index.html`**

`<body>
    <div id="root"></div>
    <div id="modal"></div>
</body>
`

**`ModalExample.js`**

`
import React from 'react';
import Modal from 'calcite-react';
export class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.getElementById('modal');
    }
    render() {
        <Modal appElement={this.el}></Modal>
    }
}
` 