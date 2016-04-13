import React, {Component, PropTypes} from 'react';

export default class Emote extends Component {

  static propTypes = {
    id: PropTypes.string,
    from: PropTypes.string,
    text: PropTypes.string
  };

  render() {
    const id = this.props.id;
    const from = this.props.from;
    const text = this.props.text.replace('/me', '');

    return (
      <li key={`chat.msg.${id}`}>* {from} {text}</li>
    );
  }
}
