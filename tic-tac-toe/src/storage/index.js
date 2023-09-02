export const saveGameToStorage = ({board, turn}) => {
    window.localStorage.setItem("board", JSON.stringify(board)); // Aquí no usamos el clean porque es una mejor practica el hecho de que eliminemos solo el dato que necesitamos desde el LS
    window.localStorage.setItem("turn", JSON.stringify(turn));
}

export const resetGameFromLocalStorage = () => {
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
}