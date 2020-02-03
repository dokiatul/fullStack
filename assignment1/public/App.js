var nameNode = document.getElementById('name');
var component = React.createElement("h1", null, "Atul Doki"); // A simple JSX component

ReactDOM.render(component, nameNode); // Render the component inside the content Node

var introNode = document.getElementById('description');
component = React.createElement("p", null, "Graduate student at San Diego State University, Pursuing Master of Computer Science. About 4 years of proven experience as a Software Developer using multiple technologies like ATG commerce, Java, Spring framework, Microsoft Azure, angularJS, Javascript, Java Server pages.");
ReactDOM.render(component, introNode);
var imageNode = document.getElementById('image');
component = React.createElement("img", {
  src: "images/Atul.jpeg",
  alt: "Atul"
});
ReactDOM.render(component, imageNode);
var linkNode = document.getElementById('url');
component = React.createElement("a", {
  href: "https://github.com/dokiatul/fullStack"
}, "VEIW MY GITHUB REPO");
ReactDOM.render(component, linkNode);