// Arrays for AI-generated shayri parts (written in English script)
const firstLines = [
  "Dil ke armaan", 
  "Ishq ka dariya", 
  "Zindagi ke safar", 
  "Raat ke andheron", 
  "Khamoshi ke rang", 
  "Sapno ki baat",
  "Yaadon ke darya",
  "Mohabbat ka jashn"
];

const secondLines = [
  "ab aansuon mein beh gaye", 
  "lekin yeh kinara bhi hai", 
  "har mod par naya savera hai", 
  "tera intezaar rahe", 
  "jeene ki wajah ban gaye", 
  "khud se hi juda ho gaye",
  "phir bhi dil hai bekaraar",
  "har lamha hai intezaar"
];

// Generate a random shayri by combining a random first line and second line
function generateShayri() {
  const first = firstLines[Math.floor(Math.random() * firstLines.length)];
  const second = secondLines[Math.floor(Math.random() * secondLines.length)];
  return first + "<br>" + second;
}

// Display the generated shayri in the container
function displayShayri() {
  const shayriContainer = document.getElementById('shayri');
  shayriContainer.innerHTML = generateShayri();
}

// Shuffle button functionality: re-generate and display a new shayri
document.getElementById('shuffleBtn').addEventListener('click', displayShayri);

// Share button functionality: use the Web Share API if available, otherwise copy text to clipboard
document.getElementById('shareBtn').addEventListener('click', function() {
  const textToShare = document.getElementById('shayri').innerText;
  if (navigator.share) {
    navigator.share({
      title: 'Hindi Shayri',
      text: textToShare,
      url: window.location.href
    }).catch((error) => console.log('Error sharing', error));
  } else {
    // Fallback: copy the shayri to the clipboard
    navigator.clipboard.writeText(textToShare).then(() => {
      alert('Shayri copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }
});

// Generate an initial shayri when the page loads
displayShayri();
