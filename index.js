/*------------------------
Smooth Slide-In Animation (Left, Right and Up)
------------------------*/

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let targetOne = entry.target.classList.contains('hide-animation-up');
        let targetTwo = entry.target.classList.contains('hide-animation-left');
        let targetThree = entry.target.classList.contains('hide-animation-right');
        console.log(entry);

        if (entry.isIntersecting && targetOne) {
            entry.target.classList.add('show-animation-up');
        } else if (entry.isIntersecting && targetTwo) {
            entry.target.classList.add('show-animation-left');
        } else if (entry.isIntersecting && targetThree) {
            entry.target.classList.add('show-animation-right')
        } else {
            entry.target.classList.remove('show-animation-up');
            entry.target.classList.remove('show-animation-left');
            entry.target.classList.remove('show-animation-right');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide-animation-up, .hide-animation-left, .hide-animation-right');
hiddenElements.forEach(el => observer.observe(el));


// submission box 5000 word limit

function limitWords(text, maxWords) {
    const words = text.split(/\s+/);
    const truncatedWords = words.slice(0, maxWords);
    const truncatedText = truncatedWords.join(' ');
    return truncatedText;
}

function limitAndDisplay() {
    const inputText = document.getElementById('synopsis').value;
    const maxWordsLimit = 1000;
    const truncatedText = limitWords(inputText, maxWordsLimit);
    updateWordCount();
}

function updateWordCount() {
    const inputText = document.getElementById('synopsis').value;
    const maxWordsLimit = 1000;
    const words = inputText.split(/\s+/);
    const wordCount = words.filter(word => word.trim() !== '').length;
    
    const wordsOverLimit = Math.max(0, wordCount - maxWordsLimit);
    
    document.getElementById('wordCount').innerText = `Word Count: ${wordCount} (${wordsOverLimit} words over the limit)`;
}

document.getElementById('synopsis').addEventListener('input', limitAndDisplay);
