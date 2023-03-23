//Pick<Type, Keys>
//Omit<Type, Keys>

type Pessoa = {
    nome: string,
    idade: number,
    email: string
}

type Keys = 'nome' | 'idade'

const cadastroPick: Pick<Pessoa, Keys> = {
    nome: 'José',
    idade: 32
}

const cadastroOmit: Omit<Pessoa, Keys> = {
    email: 'email@email.com'
}