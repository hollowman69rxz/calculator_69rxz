function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendCharacter(char) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && char !== '.') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector('.buttons').addEventListener('mouseover', function() {
    this.style.backgroundColor = getRandomColor();
});

document.querySelector('.buttons').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#333'; // Warna default saat mouse keluar
});