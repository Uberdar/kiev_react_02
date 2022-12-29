import React from 'react';
class TodoEditor extends React.Component {
  state = {
    msg: '',
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.addOneTodo(this.state.msg);
    this.setState({ msg: '' });
  };

  onChangeHandler = e => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <textarea
          className="textareaclass"
          value={this.state.msg}
          onChange={this.onChangeHandler}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TodoEditor;
