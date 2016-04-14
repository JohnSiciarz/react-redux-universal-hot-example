import React, {Component, PropTypes} from 'react';

export default class Message extends Component {

  static propTypes = {
    from: PropTypes.string,
    text: PropTypes.string,
    currentUser: PropTypes.bool
  };

  render() {
    const style = require('./Message.scss');

    const from = this.props.from;
    const text = this.props.text;

    const className = this.props.currentUser
      ? style.message + ' ' + style.current
      : style.message;

    return (
      <li className={className}>
        <span className={style.user}>
          <i className={style.icon + ' fa fa-user'} aria-hidden="true"></i>
          {from}
        </span>
        <span className={style.text}>{text}</span>
      </li>
    );
  }
}
