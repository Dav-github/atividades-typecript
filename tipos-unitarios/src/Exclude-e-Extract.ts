// Exclude<unionType, excludedMembers>
// Extract<type, union>

type CadastroLogin = {
    nome: string,
    email: string
}

type CadastroEndereco = {
    rua: string,
    numero: string
}

type ParteDoCadastroComExclude = Exclude<CadastroLogin | CadastroEndereco , CadastroLogin>


type ParteDoCadastroComExtract = Extract<CadastroLogin | CadastroEndereco , CadastroLogin | CadastroEndereco>

const objetoExtract:ParteDoCadastroComExtract = {
    nome: 'novais',
    email: 'novais@email.com'
}

const objetoExclude: ParteDoCadastroComExclude = {
    rua: 'rua dos bobos',
    numero: '0'
}