import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import style from "../css/_layout.scss";
import { add, remove, done } from "../reducers/todo/todo";

const Item = ({ onRemove, onDone, item }) => (
  <li style={{ textDecoration: item.done ? "line-through" : "none" }}>
    {item.text}
    <div>
      <button onClick={onRemove}>X</button>
      <button onClick={onDone}>V</button>
    </div>
  </li>
);

const ToDoItem = connect(
  null,
  (dispatch, { item }) => ({
    onRemove: () => dispatch(remove(item.id)),
    onDone: () => dispatch(done(item.id))
  })
)(Item);

export class ToDo extends React.PureComponent {
  static defaultProps = {
    list: []
  };

  input = React.createRef();

  state = {
    input: ""
  };

  componentDidMount() {
    window.addEventListener("keypress", this.handleEnterPress);
    this.input.current.focus();
  }

  componentWillUnmount() {
    window.addEventListener("keypress", this.handleEnterPress);
  }

  handleEnterPress = ({ keyCode }) => {
    if (keyCode === 13) this.addTodo();
  };

  handleInput = event => {
    const { value } = event.target;
    this.setState({ input: value });
  };

  addTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  sortList = (a, b) => {
    if (a.done !== b.done && a.done) return 1;
    if (a.done === b.done) return 0;
    return -1;
  };

  render() {
    const { input } = this.state;
    const { list } = this.props;
    return (
      <div className={style.content}>
        <div className={style.container}>
          <h2>ToDo</h2>
          <input
            type="text"
            value={input}
            onChange={this.handleInput}
            ref={this.input}
          />
          <button onClick={this.addTodo}>add</button>
          <ul>
            {list
              .sort(this.sortList)
              .map(item => <ToDoItem key={item.id} item={item} />)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.todo.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo: add }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
