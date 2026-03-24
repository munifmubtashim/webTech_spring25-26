document.getElementById("Btn").addEventListener("click", analyzeText);

function analyzeText() {
  const text = document.getElementById("Text").value;
  const resultDiv = document.getElementById("result");

  const trimmedText = text.trim();

  if (trimmedText === "") {
    resultDiv.innerHTML = "<p class='error'>Please enter some text.</p>";
    return;
  }

  const charCount = text.length;

  const words = trimmedText.split(/\s+/);
  const wordCount = words.length;

  let reversedText = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }

  resultDiv.innerHTML = `
    <p><strong>Total Characters:</strong> ${charCount}</p>
    <p><strong>Total Words:</strong> ${wordCount}</p>
    <p><strong>Reversed Text:</strong><br>${reversedText}</p>
  `;
}
