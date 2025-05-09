document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const nextButton = document.querySelector('.next-button');
      if (nextButton) {
        nextButton.click();
      }
    }
  });