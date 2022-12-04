// VARIAVEIS
let questaoAtual = 0;
let respostas = 0;
let array = [];

showQuestion()
// EVENTOS
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);
document.querySelector('.porcentagem').style.display = 'none';

// FUNÇÕES
function showQuestion() {


    if (questions[questaoAtual]) {
        let q = questions[questaoAtual];

        let pct = Math.floor((questaoAtual / questions.length) * 100);

        document.querySelector('.progress--bar').style.width = `${pct}%`;
        document.querySelector('.porcentagem').innerText = `${pct}%`;
        document.querySelector('.porcentagem').style.display = 'inline';
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        let = optionsHtml = '';
        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClick)
        })

    } else {
        document.querySelector('.porcentagem').innerText = `100%`;
        finishQuiz();
    }


}


// pega a posição do clicada da resposta
function optionClick(e) {
    let clikOption = parseInt(e.target.getAttribute('data-op'));


    if (questions[questaoAtual].answer === clikOption) {
        respostas++;
    }

    questaoAtual++;
    showQuestion();
}

function finishQuiz() {
    let points = Math.floor((respostas / questions.length) * 100);

    if (points < 30) {
        document.querySelector('img').src = 'loser.png'
        document.querySelector('.scoreText1').innerHTML = 'Ta ruim ein? LOSER';
        document.querySelector('.scorePct').style.color = '#ff0000';
    } else if (points >= 30 && points < 70) {
        document.querySelector('.scoreText1').innerHTML = 'Muito bom, mas pode melhorar !';
        document.querySelector('.scorePct').style.color = '#fff00';
        document.querySelector('img').src = 'meio.png'

    } else if (points >= 70) {
        document.querySelector('.scoreText1').innerHTML = 'Parabéns';
        document.querySelector('.scorePct').style.color = '#0d630d';
        document.querySelector('img').src = 'campeao.png'
    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
    document.querySelector('.scoreText2').innerHTML = `Voce respondeu ${questions.length} questões e acertou ${respostas} `

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';
}

function resetEvent() {
    respostas = 0;
    questaoAtual = 0;
    showQuestion();
    document.querySelector('.porcentagem').style.display = 'none';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



