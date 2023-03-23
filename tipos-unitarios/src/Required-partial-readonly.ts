type Usuario = {
    nome: string,
    idade?: number,
    email: string
}

const exibirUsuario = (info:Usuario) => {
    return info
}

// const exibirUsuario = (info:Required<Usuario>) => {
//     return info
// }

// const exibirUsuario = (info:Partial<Usuario>) => {
//     return info
// }

// const exibirUsuario = (info:Readonly<Usuario>) => {
//     return info
// }

const usuario: Readonly<Usuario> = {
    nome: 'nome',
    email: 'nome@email.com',
    idade: 20
}

console.log(exibirUsuario(usuario))