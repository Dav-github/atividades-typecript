type Gasto = {
    preco: number,
    calda: 'morango' | 'chocolate'
}

type Sorvete = 'baunilha'| 'napolitano' | 'flocos'

const ComprasDeSorvete: Record<Sorvete,Gasto> = {
    baunilha:{
        preco:300,
        calda: 'morango'
    },
    napolitano:{
        preco:300,
        calda: 'chocolate'
    },
    flocos:{
        preco:300,
        calda: 'morango'
    }
}