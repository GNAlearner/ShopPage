let currentlyOpenContent = null;

function toggleExtraContent(contentId, box) {
    const content = document.getElementById(contentId);
    const isContentVisible = content.getAttribute('data-visible') === 'true';

    if (currentlyOpenContent && currentlyOpenContent !== content) {
        currentlyOpenContent.style.display = "none";
        currentlyOpenContent.setAttribute('data-visible', 'false');
        currentlyOpenContent.parentElement.classList.remove('selected');
      }

    if (isContentVisible) {
      content.style.display = "none";
      content.setAttribute('data-visible', 'false');
      currentlyOpenContent = null;
      box.classList.remove('selected');
      box.querySelector('input[type="radio"]').checked = false;
    } else {
      content.style.display = "block";
      content.setAttribute('data-visible', 'true');
      currentlyOpenContent = content;
      box.classList.add('selected');
      box.querySelector('input[type="radio"]').checked = true;
    }
  }