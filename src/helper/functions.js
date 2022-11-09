export const shorten = (title) =>{
    const newTitle = title.split(" ")
    const shortTitle = `${newTitle[0]} ${newTitle[1]}`
    return shortTitle;
}

export const quantityCounter = (state, id) =>{
    const index = state.selectedItems.findIndex(item => item.id === id)
    if(index === -1){
        return false
    }else{
        return state.selectedItems[index].quantity
    }
}