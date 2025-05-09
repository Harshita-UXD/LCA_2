document.addEventListener('DOMContentLoaded', function () {
  const chapters = [
    "Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5",
    "Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10: Light"
  ];

  const chaptersContainer = document.getElementById('chaptersContainer');

  chapters.forEach((title, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
    <a href="Chapter-light.html">
      <h4>${title}</h4>
      <p class="label">Strength</p>
      <div class="play-button" title="Play Chapter"></div>
      <p class="duration">30 mins</p>
      <div class="progress-bar">
        <div class="progress-fill" id="progress${index}" style="width: 0%;"></div>
      </div>
      </a>
    `;

    // Mouseover event
    card.addEventListener('mouseover', () => {
      card.style.backgroundColor = '#f0e9fc';
    });
    card.addEventListener('mouseout', () => {
      card.style.backgroundColor = 'white';
    });

    // Click event to update progress bar
    card.addEventListener('click', () => {
      const progress = document.getElementById(`progress${index}`);
      const currentWidth = parseInt(progress.style.width) || 0;
      const newWidth = Math.min(100, currentWidth + 10);
      progress.style.width = `${newWidth}%`;
    });

    chaptersContainer.appendChild(card);
  });

  // Example key-based event
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
      alert('You pressed Right Arrow Key!');
    }
  });

  // DOM traversal example
  const firstCard = chaptersContainer.firstElementChild;
  if (firstCard) {
    console.log("First card title:", firstCard.querySelector('h4').innerText);
  }
});
