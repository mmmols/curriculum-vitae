import React, { Component } from "react";
import PropTypes from "prop-types";
import { Accordion, Icon } from "semantic-ui-react";

class Project extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const { index } = this.props;
    const { title, url } = this.props.data;

    return (
      <>
        <Accordion.Title
          active={activeIndex === index}
          index={index}
          onClick={this.handleClick}
        >
          {url && <Icon name='dropdown' />}
          {title}
        </Accordion.Title>
        {url && (
          <Accordion.Content active={activeIndex === index}>
            <a href={url}>{url}</a>
          </Accordion.Content>
        )}
      </>
    );
  }
}

Project.propTypes = {
  data: PropTypes.object
};

export default Project;
