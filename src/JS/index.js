/* OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo corresposndente 

Passo 1 - Dar um jeito de pegar o elemento HTML dos botões

Passo 2 - dar um jeito de identificar o clique do usuário no botão

Passo 3 - Desmarcar o botão selecionado anterior

Passo 4 - Marcar o botão clicado como se estivesse selecionado

Passo 5 - Esconder a imagem anterior

Passo 6 - Fazer aparecer a imagem correspondente ao botão clicado */

/*PASSO 1*/
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

/*PASSO 2*/
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        /*PASSO 3*/
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        /*PASSO 4*/
        botao.classList.add('selecionado');
    
        /*PASSO 5*/
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        /*PASSO 6*/
        imagens[indice].classList.add('ativa');
    })
})