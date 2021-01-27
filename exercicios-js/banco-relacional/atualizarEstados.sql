update estados
set nome = 'Maranhão' -- cuidado ao não por where, irá alterar todos os dados.
where sigla = 'MA'

select
    nome
from 
    estados
where
    sigla = 'MA'

update estados
set nome = 'Paraná', populacao = 11.32
where sigla = 'PR'

select est.nome, sigla, populacao
from estados est where sigla = "PR"