const { PureComponent } = require("react");

class PureClassComponent extends PureComponent {
  render() {
    console.log("purechild rerender");
    return (
      <>
        <h1>PureClassComponent</h1>
      </>
    );
  }
}

export default PureClassComponent;
