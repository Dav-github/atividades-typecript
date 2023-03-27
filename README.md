# Atividades typescript

## Tipos-unitarios

- Required: Independente de como construir o tipo ele força que todos as propriedades sejam passadas

- Partial: Aceita se ao menos uma parte do tipo for passada.

- Readonly: Torna as propriedades como apenas leitura, na pratica isso faz com que vc não possa alterar os valores depois de declarados.

- Record: Serve para criar um tipo de objeto onde se faz necessário passar todas as chaves com os tipos declarados.

- Pick: escolhe qual parametro é obrigatório passar de um determinado tipo.

- Omit: escolhe qual parametro não se deve passar de um determinado tipo.

- Exclude: Recebe dois "argumentos" união de tipos e membros excluidos.

- Extract: Recebe dois "argumentos" tipo e união.

- NonNullable: Rebece um ou mais tipos, ele remove qualquer tipo que retorne um valor nulo ou indefinido

- ReturnType: Constroi um tipo baseado no tipo de retorno de uma função.
