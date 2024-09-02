const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal causa do aquecimento global?",
        alternativas: [
            {
                texto: "Emissão de gases do efeito estufa",
                afirmacao: "Os gases são liberados principalmente pela queima de combustíveis fósseis, desmatamento e outras atividades humanas.  "
            },
            {
                texto: "Erosão do solo",
                afirmacao: "A erosão é causada principalmente pela ação do vento, da água e das atividades humanas.."
            }
        ]
    },
    {
        enunciado: "Qual prática é mais sustentável para o meio ambiente?",
        alternativas: [
            {
                texto: "Reciclagem",
                afirmacao: "A reciclagem conserva recursos naturais e economiza energia."
            },
            {
                texto: "Descarte de lixo em aterros",
                afirmacao: "Os aterros geram problemas ambientais como a contaminação do solo e das águas subterrâneas, além da emissão de gases de efeito estufa."
            }
        ]
    },
    {
        enunciado: "Qual fonte de energia é considerada renovável? ",
        alternativas: [
            {
                texto: "Energia de combustíveis fósseis",
                afirmacao: "Esses combustíveis não são infinitos e sua extração e uso contribuem para a emissão de gases de efeito estufa e a degradação ambiental."
            },
            {
                texto: "Energia solar",
                afirmacao: "Uma fonte de energia inesgotável e disponível em praticamente todo planeta."
            }
        ]
    },
    {
        enunciado: "Qual material é mais biodegradável?",
        alternativas: [
            {
                texto: "Papel",
                afirmacao: "O papel, sendo feito de fibras de madeira, se decompõe naturalmente e semanas a meses, dependendo das condições ambientais."
            },
            {
               texto: "Plástico",
                afirmacao: "Os plásticos convencionais derivados de petróleo, pode levar centenas a milhares de anos para se decompor, causando impactos ambientais significativos durante esse tempo."}
        ]
    },
    {
        enunciado: "Qual método é melhor para a conservação de florestas?",
        alternativas: [
            {
                texto: "Desmatamento controlado",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Reflorestamento",
                afirmacao: "Envolve plantar árvores em áreas desmatadas ou degradadas, ajudando a restaurar ecossistemas, melhorar a biodiversidade, capturar dióxido de carbono e previnir a erosão do solo."}
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();