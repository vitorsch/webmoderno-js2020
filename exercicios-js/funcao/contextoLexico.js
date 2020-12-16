const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

/* Ao realizar essa chamada, aparentemente temos a impressão que será impresso
'Local', entretanto como a funçao minhaFuncao foi declarada em um escopo global
a referencia que ela tem é relacionada ao valor = 'Global'. O que indica que seu
local de chamada não interfere no escopo do local de declaração */