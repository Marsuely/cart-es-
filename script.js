const cardsData = [
    {
        question: "Quem descobriu a America?",
        answer: "Cristóvão Colombo."
    },
    {
        question: "Qual é a capital da Espanha?",
        answer: "Madri."
    },
    {
        question: "O que marcou o Brasil em 1500?",
        answer: "A chegada dos portugueses ou o “descobrimento do Brasil”."
    }
];

const container = document.getElementById('cardsContainer');

function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';

    const questionElem = document.createElement('div');
    questionElem.className = 'question';
    questionElem.textContent = data.question;

    const answerElem = document.createElement('div');
    answerElem.className = 'answer';
    answerElem.textContent = data.answer;

    card.appendChild(questionElem);
    card.appendChild(answerElem);

    card.addEventListener('click', () => {
        if (answerElem.style.display === 'none' || answerElem.style.display === '') {
            answerElem.style.display = 'block';
        } else {
            answerElem.style.display = 'none';
        }
    });

    return card;
}

cardsData.forEach(item => {
    const card = createCard(item);
    container.appendChild(card);
});
