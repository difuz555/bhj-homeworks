const editor = document.getElementById('editor');

if (localStorage.text) {
    editor.value = localStorage.text;
} else {
    localStorage.text = '';
}

editor.addEventListener('keydown', (e) => {
    localStorage.text += e.key;
    console.log(e.key);
})