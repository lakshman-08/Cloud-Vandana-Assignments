function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => {
      const lastChar = word.match(/\W+$/);
      const reversed = word
        .replace(/\W+$/, '') 
        .split('')
        .reverse()
        .join('');
  
      return lastChar ? reversed + lastChar[0] : reversed;
    });
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }
  const inputSentence = prompt("Enter a sentence:");
  if (inputSentence) {
    const reversed = reverseWords(inputSentence);
    console.log(`Reversed sentence: ${reversed}`);
  } else {
    console.log("You didn't enter a sentence.");
  }
  