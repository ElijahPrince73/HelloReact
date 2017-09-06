var Greeter = React.createClass({

  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is a default message'
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name
    }
  },
  onButtonClicked: function(e) {
    e.preventDefault();

    var nameRef = this.refs.name
    var name = nameRef.value

    nameRef.value = ''

    if (typeof name === 'string' && name.lenth > 0) {
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message + '!!'}</p>
        <form onSubmit={this.onButtonClicked}>
          <input type="text" ref="name"></input>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
})
var firstName = 'Prince'
ReactDOM.render(
  <Greeter name={firstName} message='This is a component'/>,
  document.getElementById('app')
);
