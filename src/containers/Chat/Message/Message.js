import React, {Component, PropTypes} from 'react';

export default class Message extends Component {

  static propTypes = {
    id: PropTypes.string,
    from: PropTypes.string,
    text: PropTypes.string
  };

  render() {
    const id = this.props.id;
    const from = this.props.from;
    const text = this.props.text;

    return (
      <li key={`chat.msg.${id}`}>{from}: {text}</li>
    );
  }
}
