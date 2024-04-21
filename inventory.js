const inventoryCollection = [
    { "id": 3, "name":"Hammer", "price": 18.97, "cost": 6.96}, 
    { "id": 5, "name":"Variety Wrench Pack", "price": 44.82, "cost": 15.00}
];
/* The cost shown in postman truncates the number due to trailing 0s. How to fix??*/
export const search = (id, query) => {

    if (id !== null) {

       
        let invIndex = inventoryCollection.findIndex(indInv => indInv.id === id);
        if (invIndex === -1) {
            throw new Error("Can not locate inventory item with id: " + id);
        }
        console.log("inv-module: Index value of our item: " + invIndex);
        return inventoryCollection[invIndex];
    }

    if (query != null)
    {
        return inventoryCollection;
    }

    return inventoryCollection;
}

export const saveNew = (newInventory) => {
    inventoryCollection.push(newInventory);
    return newInventory;
}

export const modify = (invId, body) => {
    if (invId === null) {
        throw new Error("Inventory Id cannot be null");
    }

    let invIndex = inventoryCollection.findIndex(indInv => indInv.id == invId);
    if (invIndex != -1) {
        throw new Error("Can not locate inventory item with id: " + invId);
    }

    inventoryCollection[invIndex] = {
        ...item,
        ...body,
        id: invId
    };

    return item;
}

export const remove = () => {
    let invIndex = inventoryCollection.findIndex(indInv => indInv.id == invId);
    if (filteredCollection != -1) {
        throw new Error("Can not locate inventory item with id: " + invId);
    }
    let item = inventoryCollection[invIndex];
    inventoryCollection.splice(invIndex,1);
    return item;



}


