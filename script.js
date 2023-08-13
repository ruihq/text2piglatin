document.getElementById('translateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = translateToPigLatin(inputText);
    document.getElementById('outputText').textContent = outputText;
});

function translateToPigLatin(text) {
    const words = text.split(' ');
    const translatedWords = words.map(translateWordToPigLatin);
    return translatedWords.join(' ');
}

function translateWordToPigLatin(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let pigLatinWord = word;
    let index = 0;

    while (index < word.length && !vowels.includes(word[index].toLowerCase())) {
        index++;
    }

    if (index > 0) {
        const prefix = word.slice(0, index);
        pigLatinWord = word.slice(index) + prefix + 'ay';
    } else {
        pigLatinWord = word + 'way';
    }

    return pigLatinWord;
          }
          
