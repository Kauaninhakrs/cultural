const nomes = ["Kauane", "Julia", "Amanda", "Helena", "Gustavo", "Felipe", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)