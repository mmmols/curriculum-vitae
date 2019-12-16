import React, { Component } from "react";
import PropTypes from "prop-types";
import { Accordion, Icon, Card } from "semantic-ui-react";

class Education extends Component {
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
    const { education, school, started_at, ended_at } = this.props.data;

    return (
      <>
        <Accordion.Title
          active={activeIndex === index}
          index={index}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          {education}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === index}>
          <Card
            header={education}
            meta={school}
            description={[started_at, "-", ended_at].join("")}
          />
        </Accordion.Content>
      </>
    );
  }
}

Education.propTypes = {
  data: PropTypes.object
};

export default Education;
