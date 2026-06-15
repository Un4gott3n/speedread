let timer = null;
let isRunning = false;
let index = 0;

function highlightMiddle(word) 
{
  if(word.length === 0) return "";
  
  const middle = Math.floor(word.length / 2)
  
  return (
    word.slice(0, middle) +
    `<span class="highlight">${word[middle]}</span>` +
    word.slice(middle + 1)
  );
}

function startReading() 
{
  if(isRunning) return;
  
  isRunning = true;

  const text = document.getElementById("inputText").value;
  const words = text.split(/\s+/);
  const wpm = Number(document.getElementById("wpm").value);

  timer = setInterval(() => {
    if(index >= words.length)
    {
      stopReading();
      return;
    }
    document.getElementById("reader").innerHTML =
      highlightMiddle(words[index]);

    index++;

    }, 60000 / wpm);
}

function pauseReading() 
{
    clearInterval(timer);
    isRunning = false;
}

function stopReading() 
{
    clearInterval(timer);
    isRunning = false;
    index = 0;
}
