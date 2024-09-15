// script.js
function suggestMovie() {
    const genre = document.getElementById('genre').value;
    const mood = document.getElementById('mood').value;
    const duration = parseInt(document.getElementById('color').value, 10);
    let suggestion = '';

    if (genre === 'action') {
        if (mood === 'joyful') {
            suggestion = 'We suggest you watch "Mad Max: Fury Road".';
        } else if (mood === 'calm') {
            suggestion = 'We suggest you watch "Inception".';
        }    else if (mood === 'sad') {
            suggestion = 'We suggest you watch "The Notebook".';
            else if (mood === 'energetic') {
            suggestion = 'We suggest you watch "The Notebook".';
        }
    }
        }
    } else if (genre === 'comedy') {
        if (mood === 'joyful') {
            suggestion = 'We suggest you watch "Supergirl".';
        } else if (mood === 'calm') {
            suggestion = 'We suggest you watch "The Grand Budapest Hotel".';
            {
            suggestion = 'We suggest you watch "The Notebook".';
            else if (mood === 'energetic') {
            suggestion = 'We suggest you watch "The Notebook".';
        }
         }
        }
    } else if (genre === 'mystery') {
        if (mood === 'joful') {
            suggestion = 'We suggest you watch "The Shawshank Redemption".';
        } else if (mood === 'calm') {
            suggestion = 'We suggest you watch "Forrest Gump".';
            {
            suggestion = 'We suggest you watch "The Notebook".';
            else if (mood === 'energetic') {
            suggestion = 'We suggest you watch "The Notebook".';
        }
    }
}
        } else if (genre === 'romcom') {
        if (mood === 'joful') {
            suggestion = 'We suggest you watch "The Shawshank Redemption".';
        } else if (mood === 'calm') {
            suggestion = 'We suggest you watch "Forrest Gump".';
            {
            suggestion = 'We suggest you watch "The Notebook".';
            else if (mood === 'energetic') {
            suggestion = 'We suggest you watch "The Notebook".';
        }
         }
        }
    } else {
        suggestion = 'Sorry, we don\'t have suggestions for this genre.';
    }

    document.getElementById('suggestion').textContent = suggestion;
}