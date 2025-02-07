// Helper function to get a random element from an array
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Word arrays for dynamic shayri generation
const subjects    = ["Ishq", "Dil", "Zindagi", "Raat", "Khamoshi", "Sapna", "Yaadon", "Mohabbat", "Tanhai"];
const adjectives  = ["bekaraar", "mehfooz", "aashiqana", "tanha", "roshan", "dhundhla", "mohabbat bhara"];
const verbs       = ["beh gaye", "ruk gaye", "toot gaye", "bikhre", "chhalak gaye", "chamak uthe"];
const nouns       = ["armaan", "dariya", "safar", "andheron", "rang", "jashn", "geet", "kahani"];
const modifiers   = ["jhilmilata", "ubhar gaya", "phir se chamka", "mehsoos hua", "mahka", "khil utha"];

// Template definitions for two-line shayri generation
const templates = [
  {
    line1: "{subject} ke {noun} mein {adjective} sapne {verb}",
    line2: "aur dil ne {modifier} ehsaas se jeena sikha"
  },
  {
    line1: "Jab {subject} ne {noun} ko {verb},",
    line2: "to har lamha hua {modifier} aur {adjective}"
  },
  {
    line1: "{subject} ka {noun} hai, {adjective} sa,",
    line2: "har pal {verb} aur {modifier} sa"
  },
  {
    line1: "Kahani hai {subject} ki,",
    line2: "{noun} ne dil ko {modifier} tarana di"
  }
];

// Function to generate an AI-style shayri by selecting a random template and substituting placeholders
function generateAIShayri() {
  const template = random(templates);
  
  // Replace placeholders for line 1
  let line1 = template.line1
    .replace("{subject}", random(subjects))
    .replace("{noun}", random(nouns))
    .replace("{adjective}", random(adjectives))
    .replace("{verb}", random(verbs));
  
  // Replace placeholders for line 2
  let line2 = template.line2
    .replace("{modifier}", random(modifiers))
    .replace("{noun}", random(nouns))
    .replace("{adjective}", random(adjectives))
    .replace("{verb}", random(verbs))
    .replace("{subject}", random(subjects));
  
  return line1 + "<br>" + line2;
}

// Function to display the generated shayri
function displayShayri() {
  const shayriContainer = document.getElementById('shayri');
  shayriContainer.innerHTML = generateAIShayri();
}

// Shuffle button: generate a new shayri on click
document.getElementById('shuffleBtn').addEventListener('click', displayShayri);

// Share button: use the Web Share API if available; otherwise copy to clipboard
document.getElementById('shareBtn').addEventListener('click', function() {
  const textToShare = document.getElementById('shayri').innerText;
  if (navigator.share) {
    navigator.share({
      title: 'Hindi Shayri',
      text: textToShare,
      url: window.location.href
    }).catch((error) => console.log('Error sharing', error));
  } else {
    navigator.clipboard.writeText(textToShare).then(() => {
      alert('Shayri copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }
});

// Generate an initial shayri when the page loads
displayShayri();
