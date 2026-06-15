let timeer;

function highlightMiddle(word) {
  if(word.length === 0) return "";

  const middle = Math.floor(word.length / 2)

  return (
    word.slice(0, middle) +
    '<span class='highlight'>${word[middle]}</span> +
    word.slice(middle + 1)
  );

  function startReading() {
    clearInterval(timer);

    const text = document.getElementById("inputText").value;
    const words = text.split(/\s+/);

    const wpm = Number(document.getElementById("wpm").value);

    let index = 0;

    timer = setInterval(() => {
      if(index >= words.length) {
        clearInterval(timer);
        return;
    }
      document.getElementById("reader").innerHTML =
        highlightMiddle(words[index]);

      index++;

    }, 60000 / wpm);
}
