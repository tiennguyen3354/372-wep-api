const dadJokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm afraid for the calendar. Its days are numbered.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
    "Why can't you hear a pterodactyl go to the bathroom? Because the 'P' is silent.",
    "I used to play piano by ear, but now I use my hands.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "How do you organize a space party? You planet.",
    "Why did the math book look sad? Because it had too many problems."
];


export const getJokes = (req, res) => { 
    res.status(200).send(dadJokes); 
}

