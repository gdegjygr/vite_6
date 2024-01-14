import { createSlice } from "@reduxjs/toolkit";
import products from '../data/products.json'


const productSlice = createSlice({
    name: "product",
    initialState: {
        addedProduct: [],
        products: products,
        value: 1
    },
    reducers: {
        addToBasket: (state, action) => {
            const item = action.payload;
            // Условие проверки на наличие элемента в массиве (чтобы элемент не повторялся)
            if(!state.addedProduct.some(repeat => repeat._id == item._id)) {
                state.addedProduct.push(item)
            }
        },
        deleteInBasket: (state, action) => {
            const index = action.payload._id
            // создаю переменную и привязываю ей стейт для того чтобы потом к ней обратиться
            const deleteCurrentIndex = state.addedProduct.findIndex(element => element._id == index)
            // обращаюсь к переменной "deleteCurrentIndex" с условием в if(){}
            if(!deleteCurrentIndex !== -1) {
                // удаляю элемент в ко-ве 1 штуки:
                state.addedProduct.splice(deleteCurrentIndex, 1)
            }
        },
        increaseCounter: (state) => {
            state.value += 1
        },
        decreaseCounter: (state) => {
            state.value = state.value > 1 ? state.value -= 1 : 1
        }
    }
})


export const productAction = productSlice.actions
export const productReducer = productSlice.reducer