// External links

window.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('a'))
    .filter(link => link.href && link.host !== window.location.host)
    .forEach(link => {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
});

// Footnotes

window.addEventListener('DOMContentLoaded', initFootnotes, false);
window.addEventListener('mouseup', hideFootnotes, true);

function initFootnotes() {
    Array.from(document.querySelectorAll('sup[role=doc-noteref]')).forEach(sup => {
      const link = sup.querySelector('a');
      const href = link.getAttribute('href');
      const targetId = href.substring(1);
      const footnoteId = href.replace('#fn:', '');

      // Create hidden footnote tooltip
      const tooltip = document.createElement('div');
      tooltip.id = 'fntip:' + footnoteId;
      tooltip.classList.add('footnote_tip');
      tooltip.innerHTML = document.getElementById(targetId).innerHTML;
      sup.appendChild(tooltip);

      link.addEventListener('click', showFootnote);
      link.style.cursor = 'help';
    });
}

function hideFootnotes() {
  Array.from(document.getElementsByClassName('footnote_tip')).forEach(element => element.style.visibility = 'hidden');
}

function showFootnote(event) {
  const link = event.target;
  const footnoteId = link.getAttribute('href').replace('#fn:', '');
  const footnoteTip = document.getElementById('fntip:' + footnoteId);

  if (footnoteTip.style.visibility == 'visible')  {
    footnoteTip.style.visibility = 'hidden';
  } else {
    footnoteTip.style.visibility = 'visible';
  }

  event.preventDefault();
  event.stopPropagation();
}

// End footnotes
