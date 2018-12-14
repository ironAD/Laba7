import React, { Component } from "react";
class List extends Component 
{
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Список городов</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="list">Добавьте Город</label>
          <br />
          <br />
          <input
            id="list"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Добавить</button>
        </form>
        <CurList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }
}

class CurList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
export default List;