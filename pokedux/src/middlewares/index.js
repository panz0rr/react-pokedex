export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

export const capitalize = (store) => (next) => (actionInfo) => {
    const capitalizedNames = actionInfo.payload.map(pokemon => ({
        ...pokemon,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    }));
    
    const updatedAction = {
        ...actionInfo, 
        payload: capitalizedNames,
    };

    next(updatedAction);
} 