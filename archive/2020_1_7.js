
// TIP: Need to keep tabs on an element?
// Use MutationObserver to look for changes
// to the DOM tree!

const elementToWatch = document.getElementById('element');

const onChange = (mutationList, observer) => {
  for (mutation of mutationList) {
    if (mutation.type === 'attributes') {
      // Attributes have changed!
    }

    if (mutation.type === 'childList') {
      // Children have been added or removed!
    }
  }
}

const observer = new MutationObserver(onChange);
observer.observe(elementToWatch, { 
  // Watch if children are added/removed
  childList: true, 

  // Watch for element attributes changing
  attributes: true
});

