const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Missing to Add event listener to each anchor link and get all anchor links
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});


const button = document.getElementById('myButton');

// Add event listener to the button
button.addEventListener('click', () => {
  // Perform some action when the button is clicked
  console.log('Button clicked!');
});
