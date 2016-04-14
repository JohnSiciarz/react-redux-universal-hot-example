import React, {Component, PropTypes} from 'react';

export default class Emote extends Component {

  static propTypes = {
    from: PropTypes.string,
    text: PropTypes.string
  };

  render() {
    const style = require('./Message.scss');

    const from = this.props.from;
    const text = this.props.text.replace('/me', '');

    return (
      <li className={style.message}>
        <span className={style.text}>* {from} {text}</span>
      </li>
    );
  }
}
