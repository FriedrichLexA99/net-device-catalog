const securityItems = [
    { "username": "Secret Samuel", "Password": "camelCaseis_a_scam99"}
];

export const search = (username, query) => {

    if (username !== null) {

       
        let invIndex = securityItems.findIndex(indInv => indInv.username === username);
        if (invIndex === -1) {
            throw new Error("Can not locate User: " + username);
        }
        console.log("inv-module: Index value of our item: " + invIndex);
        return securityItems[invIndex];
    }

    if (query != null)
    {
        return securityItems;
    }

    return securityItems;
}

export const saveNew = (newInventory) => {
    securityItems.push(newInventory);
    return newInventory;
}

export const modify = (invusername, body) => {
    if (invusername === null) {
        throw new Error("Inventory username cannot be null");
    }

    let invIndex = securityItems.findIndex(indInv => indInv.username == invusername);
    if (invIndex != -1) {
        throw new Error("Can not locate inventory item with username: " + invusername);
    }

    securityItems[invIndex] = {
        ...item,
        ...body,
        username: invusername
    };

    return item;
}

export const remove = () => {
    let invIndex = securityItems.findIndex(indInv => indInv.username == invusername);
    if (filteredCollection != -1) {
        throw new Error("Can not locate inventory item with username: " + invusername);
    }
    let item = securityItems[invIndex];
    securityItems.splice(invIndex,1);
    return item;



}