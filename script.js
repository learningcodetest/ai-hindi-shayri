// Helper function: Return a random element from an array.
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Arrays for AI-generated shayri parts
const subjects = ["Ishq", "Dil", "Zindagi", "Raat", "Khamoshi", "Sapna", "Yaadon", "Mohabbat"];
const objects = ["armaan", "dariya", "safar", "andheron", "rang", "jashn", "geet", "kahani"];
const emotions = ["bekaraar", "mehfooz", "aashiqana", "tanha", "roshan"];
const modifiers = ["jhilmilata", "dhundhla", "ubhar gaya", "phir se chamka", "mehsoos hua"];
const verbs = ["beh gaye", "ruk gaye", "toot gaye", "bikhre", "chhalak gaye"];

// Template options for two-line shayris
const templates = [
  {
    line1: "{subject} ke {object} mein {emotion}",
    line2: "phir bhi, dil ne {verb} aur {modifier} ho gaya"
  },
  {
    line1: "{subject} ne {object} ko {verb} kar,",
    line2: "dil mein {modifier} {emotion} bhar diya"
  },
  {
    line1: "Jab {subject} {verb},",
    line2: "to {object} ho gaya {modifier}"
  }
];

// Function to generate an AI-style shayri using a random template and word substitutions
function generateAIShayri() {
  const template = random(templates);
  const line1 = template.line1
    .replace("{subject}", random(subjects))
    .replace("{object}", random(objects))
    .replace("{emotion}", random(emotions))
    .replace("{modifier}", random(modifiers))
    .replace("{verb}", random(verbs));
    
  const line2 = template.line2
    .replace("{subject}", random(subjects))
    .replace("{object}", random(objects))
    .replace("{emotion}", random(emotions))
    .replace("{modifier}", random(modifiers))
    .replace("{verb}", random(verbs));
    
  return line1 + "<br>" + line2;
}

// Function to display the generated shayri in the container
function displayShayri() {
  const shayriContainer = document.getElementById('shayri');
  shayriContainer.innerHTML = generateAIShayri();
}

// Shuffle button functionality: generate a new shayri on click
document.getElementById('shuffleBtn').addEventListener('click', displayShayri);

// Share button functionality: use the Web Share API if available; otherwise, copy to clipboard
document.getElementById('shareBtn').addEventListener('click', function() {
  const textToShare = document.getElementById('shayri').innerText;
  if (navigator.share) {
    navigator.share({
      title: 'Hindi Shayri',
      text: textToShare,
      url: window.location.href
    }).catch((error) => console.log('Error sharing', error));
  } else {
    // Fallback: copy the shayri text to clipboard
    navigator.clipboard.writeText(textToShare).then(() => {
      alert('Shayri copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }
});

// Generate an initial shayri when the page loads
displayShayri();
