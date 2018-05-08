import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyledTabItem, StyledTabLink } from './Tab-styled';

class TabButton extends Component {
  setActiveTab = () => {
    this.props.setActiveTab(this.props.index);
  };

  renderContent = () => {
    const { render, title, index } = this.props;
    if (render) {
      return render();
    } else if (title) {
      return title;
    }
    return index;
  };

  render() {
    return (
      <StyledTabItem onClick={() => this.setActiveTab()}>
        <StyledTabLink active={this.props.active}>
          {this.renderContent()}
        </StyledTabLink>
      </StyledTabItem>
    );
  }
}

TabButton.propTypes = {
  title: PropTypes.string
};

TabButton.defaultProps = {
  title: ''
};

export default TabButton;
