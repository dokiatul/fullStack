var nameNode = document.getElementById('name');
var component = <h1>Atul Doki</h1>; // A simple JSX component
ReactDOM.render(component, nameNode); // Render the component inside the content Node

var introNode = document.getElementById('description')
component = <p>Graduate student at San Diego State University, Pursuing Master of Computer Science. About 4 years of proven experience as a Software Developer
               using multiple technologies like ATG commerce, Java, Spring framework, Microsoft Azure, angularJS, Javascript, Java Server pages.</p>;
ReactDOM.render(component, introNode);

var imageNode = document.getElementById('image');
component = <img src="images/Atul.jpeg" alt="Atul"/>;
ReactDOM.render(component, imageNode);

var linkNode = document.getElementById('url');
component = <a href="images/Atul.jpeg">VEIW MY GITHUB REPO</a>;
ReactDOM.render(component, linkNode);
