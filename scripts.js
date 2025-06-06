/*JAVA SCRIPT: VARIÁVEIS:É UM PEDACINHO DE MEMÓRIA DO COMPUTADOR
QUE POSSO GUARDAR O QUE EU QUISER. O NOME DA VARIÁVEL É O MESMO
DO QUE TEM DENTRO DA VARIÁVEL EX: let numero = 700 
EX: let nome = "Nadhia Sabat" (separando um pedacinho de memória
chamada nome e dentro dela esta guardando este nome)
RETORNO ESSES EX COM O: console.log(nome) ESTA FERRAMENTA
É PRA MOSTRAR OQ EU QUISER NA TELA (QUANDO CHAMO NOME ELE MOSTRA
O QUE TEM DENTRO DO NOME)

 FUNÇÕES: É UM PEDACINHO DE CÓDIGO QUE SÓ É EXECUTADO QUANDO É 
 CHAMADO "QUANDO EU ORDENO: CLICO NO BOTÃO" 
 EX:function FaleMeuNome() (NOMEIO A FUNÇÃO DE ACORDO COM OQ ELA FAZ)
 */
/*css precisa carregar antes da minha página "body""HTML" 
    por esse motivo foi colocado dentro do head,
    javascript só vai entrar quando o css e html estiver carregado.*/
/*javascritp não é java*/
/*ALGORITMO:RECEITA DE BOLO"PASSOS P FAZER ALGO"
1.DESCOBRIR QUANDO O USUÁRIO CLICOU NO BOTÃO
2. ASSIM QUE O BOTÃO FOR CLICADO: 
TROCAR A COR DE FUNDO: preciso falar quem é o fundo no caso 
"circulo"
E
TROCAR A IMAGEM PRINCIPAL
PUBLICAR NA INTERNET

LÓGICA DE PROGRAMAÇÃO: SABER FAZER O ALGORITMO, FAZER OS PASSOS
PARA CRIAR O SISTEMA, PENSAR LOGICAMENTE QUAIS SÃO OS PASSOS*/

/*NO JAVASCRIPT O HTML SE CHAMA DOCUMENT*/ 
/*COM O () TRANSFIRO DADOS DE UM LOCAL P O OUTRO
POSSO TRANSFERIR DADOS DO HTML P O JAVASCRIPT*/

let nome = "Nadhia"
let sobrenome = "Sabat"


console.log(sobrenome)

function FaleMeuNome() {
    console.log(nome)
}

FaleMeuNome()
/* SO EXECUTA A FUNÇÃO DO CÓDIGO ACIMA: function FaleMeuNome
QUANDO EU PEÇO EX: FaleMeuNome() 
SE EU REPETIR ESSA LINHA DE CÓDIGO MAIS VEZES, REPETIRÁ ESSE
NOME MAIS VEZES NO CONSOLE*/

let circulo = document.querySelector(".circulo")
/*ESSA VARIÁVEL É DO HTML*/ /*DOCUMENT = HTML */ 
/*querySelector: IRÁ SELECIONAR/PEGAR ALGO QUE EU QUERO NO HTML*/
/*(".circulo"): pegou a classe circulo */
/*ESSE CÓDIGO: TA INDO NO HTML/ ESTÁ PROCURANDO ALGUÉM
ESSE ALGUÉM É A CLASSE CIRCULO */

function trocarCor(cor){
    circulo.style.background = cor} /*O VALOR DA VARIÁVEL É O VALOR QUE ELE ESTÁ ENVIANDO DO
    HTML PRO JAVA SCRIPT(QUAL SORVETINHO ELE TA CLICANDO) */
    /*QUANDO APERTO NO SORVETINHO ELE VAI NO STYLE DO MEU 
    CIRCULO "CSS" E MUDA A COR DE FUNDO */ 
    /*CRIA VARIÁVEL (COR) "POIS ESSA É A INFORMAÇÃO QUE CHEGARÁ DO HTML PRA CÁ PRO 
    JAVASCRIPT. APAGO circulo.style.background = #017143 E COLOCO console.log(cor) 
    PARA DESCOBRIR SE QUANDO APERTO NOS SORVETINHOS ESTÁ MUDANDO DE COR NO CONSOLE*/

 /*com essa função descobri quando
    o usuário clicou no botão pelo console */
    /*COMO JA FOI DESCOBERTO, TROQUEI O NOME "TROCAR COR" DE 
    DENTRO DO PARENTESE PARA "CIRCULO" PARA SABER ATRAVEZ DO 
    CONSOLE SE ELE JÁ SABE QUEM É CIRCULO. DESCOBRINDO ISSO 
    EU DELETO O console.log(circulo). PQ QUERO MUDAR A COR DE
    FUNDO "BACKGROUND DO CIRCULO" QUANDO APERTAR NO SORVETINHO.
    NO JAVASCRIPT EU QUERO MUDAR O STYLE DELE */

/* PRECISO CRICAR NO BOTÃO"SORVETINHOS" E MUDAR DE COR*/
/*DESCOBRIR QUANDO O USUÁRIO CLICOU NO BOTÃO*/
/*quando clicar na imagem trocará a cor*/

/*NO CIRCULO QUERIA MUDAR O BACKGROUND E NO CASO DA IMAGEM QUERO TROCAR O src DELA */

let imagem = document.querySelector(".starbucks") 
/*cria variável: let imagem 
document: javascript
.querySelector: selecionar algo
chama a classe: (".starbucks") 
signicia: computador vai no html, procura alguém, esse alguém tem uma classe
 e essa classe é starbucks e quando ele encontra ele guarda dentro da variável*/

/*console.log(imagem) para ver se a img aparece no console */

function trocaImagem(img){
    imagem.src = img
    /*TROCAR SRC 
    QUANDO CHAMO ESSA FUNÇÃO O PC VAI NA VARIÁVEL IMAGEM E TROCA O SRC 
    "COLOCA DENTRO DA IMG UM NOVO VALOR "
    CHAMO PELO ONCLICK COLOCANDO A FUNÇÃO NO HTML CHAMADA TROCAIMAGEM 
    EX:;trocaImagem() essa linha de código foi acrescentada no html para trocar 
    a imagem do sorvete grande
    DENTRO DOS PARENTESES DO TROCAIMAGEM, COLOCO ('./img/img3.png') E MUDO O NOME
    DA IMG DENTRO DO PARENTESE P A IMAGEM E A COR SER MUDADA CONFORME O SORVETE Q EU 
    TIVER CLICADO 
    O QUE VINHER DA (IMG) COLOCA DENTRO DE IMG
    
    */
}