import { saveNew, search, modify, remove } from "./inventory.js";


const saveNewInventory = (body) => {

    return saveNew(body);
}


export const create = saveNewInventory;
export const retrieve = search;
export const update = modify;
export const deleteOne = remove;