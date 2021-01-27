ALTER TABLE empresas MODIFY cnpj VARCHAR(14)

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 9552142155215),
    ('Vale', 123210214121),
    ('Cielo', 012323214213);

desc empresas;
desc prefeitos;

select * from empresas;
select * from cidades;
select * from empresas_unidades eu, cidades c, empresas e
where eu.empresa_id = e.id AND eu.cidade_id = c.id;
-- executar no mysql bench alguns código.

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);