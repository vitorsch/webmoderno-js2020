const estudantes = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}

function melhorEstudante ( alunos = {} ) {
    let newObj = {}
    for (i in alunos ) {
        newObj[`${i}`] = alunos[i].reduce((acumulador, atual) => acumulador + atual) / Object.values(alunos)[0].length

    }
    const melhorAluno = Object.entries(newObj).reduce((anterior, atual) => 
    anterior[1] > atual[1] ? anterior : atual ).map()


    console.log(newObj, melhorAluno)
}

melhorEstudante(estudantes)