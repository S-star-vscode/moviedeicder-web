// script.js
function suggestMovie() {
    const genre = document.getElementById('genre').value;
    const mood = document.getElementById('mood').value;
    const color = document.getElementById('color').value;
    const movedictionary = {
        "action": {
            "joyful": {
                "red": "Guardians of the Galaxy",
                "blue": "Mad Max: Fury Road",
                "green": "Spider-Man: Homecoming",
                "yellow": "Jumanji: Welcome to the Jungle",
            },
            "sad": {
                "red": "Logan",
                "blue": "The Dark Knight",
                "green": "Gladiator",
                "yellow": "Hacksaw Ridge",
            },
            "energetic": {
                "red": "John Wick",
                "blue": "Die Hard",
                "green": "Mission: Impossible - Fallout",
                "yellow": "Kingsman: The Secret Service"
            },
            "calm": {
                "red": "Inception",
                "blue": "The Bourne Identity",
                "green": "Drive",
                "yellow": "A Quiet Place"
            },
        },
        "comedy": {
            "joyful": {
                "red": "The Grand Budapest Hotel",
                "blue": "Superbad",
                "green": "Step Brothers",
                "yellow": "Bridesmaids"
            },
            "sad": {
                "red": "The Pursuit of Happyness",
                "blue": "About Time",
                "green": "The 40-Year-Old Virgin",
                "yellow": "Eternal Sunshine of the Spotless Mind"
            },
            "energetic": {
                "red": "Zombieland",
                "blue": "Pitch Perfect",
                "green": "21 Jump Street",
                "yellow": "Tropic Thunder"
            },
        },
        "mystery": {
            "joyful": {
                "red": "Knives Out",
                "blue": "Clue",
                "green": "The Nice Guys",
                "yellow": "Sherlock Holmes"
            },
            "sad": {
                "red": "The Sixth Sense",
                "blue": "Gone Girl",
                "green": "Prisoners",
                "yellow": "Se7en"
            },
            "energetic": {
                "red": "Memento",
                "blue": "The Girl with the Dragon Tattoo",
                "green": "Shutter Island",
                "yellow": "Source Code"
            },
        },
        "romcom": {
            "joyful": {
                "red": "Crazy, Stupid, Love",
                "blue": "10 Things I Hate About You",
                "green": "Notting Hill",
                "yellow": "The Proposal"
            },
            "sad": {
                "red": "500 Days of Summer",
                "blue": "Silver Linings Playbook",
                "green": "About Time",
                "yellow": "The Notebook"
            },
            "energetic": {
                "red": "Legally Blonde",
                "blue": "Love Actually",
                "green": "How to Lose a Guy in 10 Days",
                "yellow": "Always Be My Maybe"
            },
        }
    }
    
    let suggestion = '';

    if (genre === '' && mood === '' && color === '') {
        suggestion = 'Please select a genre, mood, and color.';
    } else if (genre === '' && mood === '') {
        suggestion = 'Please select a genre and mood.';
    } else if (genre === '' && color === '') {
        suggestion = 'Please select a genre and color.';
    } else if (mood === '' && color === '') {
        suggestion = 'Please select a mood and color.';
    }
    else 
    {
        suggestion = movedictionary[genre][mood][color];
    }

    document.getElementById('suggestion').textContent = suggestion;
}