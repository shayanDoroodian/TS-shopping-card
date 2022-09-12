import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage";
type shoppingCartProps = {
    children : ReactNode
}
 
type shoppingCartContext = {
    openCart : ()=> void
    closeCart : ()=> void
    cartQuantity : number
    cartItems : CartItem[]
    getItemQuantity : (id : number) => number
    increase : (id : number) => void
    decrease : (id : number) => void
    remove : (id : number) => void
}
type CartItem ={
    id : number
    quantity : number
}
const shoppingCartContext = createContext({} as shoppingCartContext)

export function useShoppingCart (){
    return useContext(shoppingCartContext)
}
export function ShoppingCartProvider ({children} : shoppingCartProps){

    const[ isOpen, setisOpen]=useState(false)
    const[cartItems , setCartItems]=useLocalStorage<CartItem[]>("shopping-cart",[])
    const cartQuantity = cartItems.reduce((quantity , Item) => Item.quantity + quantity,0)
    
    
    const openCart = () => setisOpen(true)
    const closeCart = () => setisOpen(false)
    function getItemQuantity(id : number){
        return cartItems.find((item)=> item.id === id)?.quantity || 0
    }
    function increase(id : number){
        setCartItems(currItems => {
            if(currItems.find((item)=> item.id === id) == null){
                return [...currItems , {id , quantity : 1}]
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item , quantity : item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decrease(id : number){
        setCartItems(currItems => {
            if(currItems.find((item)=> item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item , quantity : item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function remove(id:number){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)

        }) 
    }
    return <shoppingCartContext.Provider value={{getItemQuantity , increase , decrease,remove , cartItems,cartQuantity , openCart ,closeCart}}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </shoppingCartContext.Provider>
}