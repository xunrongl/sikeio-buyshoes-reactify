const React = require("react");
let App = require("./components/App");

window.onload = () => {
	//replace '#roor' with App component
	React.render(<App/>, document.querySelector("#root"));
}