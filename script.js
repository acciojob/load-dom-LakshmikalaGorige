//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    // Get the body element
    var body = document.body;

    // Check if the body has any child nodes
    if (body.hasChildNodes()) {
      // If it has child nodes, remove them
      while (body.firstChild) {
        body.removeChild(body.firstChild);
      }
    }

    // Create a text node with the content "DOM load success"
    var textNode = document.createTextNode('DOM load success');

    // Append the text node to the body
    body.appendChild(textNode);
  });