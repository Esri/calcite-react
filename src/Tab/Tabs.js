import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyledTabMain, StyledTabContainer } from './Tab-styled';
import TabButton from './TabButton';

class Tabs extends Component {
  constructor(props) {
    super(props);

    const numberOfTabs = this.props.children.length;
    const defaultTab = this.props.activeTab;
    const initialTab = defaultTab && defaultTab < numberOfTabs ? defaultTab : 0;

    this.state = {
      activeTab: initialTab
    };
  }

  setActiveTab = activeTab => {
    this.setState({ activeTab });
  };

  renderAllTabs = () => {
    return React.Children.map(this.props.children, (child, index) => (
      <TabButton
        {...child.props}
        setActiveTab={this.setActiveTab}
        active={this.state.activeTab === index}
        index={index}
      />
    ));
  };

  renderCurrentTabSection = () => {
    return React.Children.toArray(this.props.children).filter(
      (child, index) => {
        return index === this.state.activeTab;
      }
    );
  };

  render() {
    return (
      <StyledTabMain>
        <StyledTabContainer>{this.renderAllTabs()}</StyledTabContainer>
        {this.renderCurrentTabSection()}
      </StyledTabMain>
    );
  }
}
Tabs.propTypes = {
  activeTab: PropTypes.number
};

Tabs.defaultProps = {
  activeTab: 0
};

export default Tabs;
