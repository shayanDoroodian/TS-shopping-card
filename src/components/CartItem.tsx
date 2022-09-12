import { useShoppingCart } from "../context/ShoppingCartContext"
import { products } from "../data/products"
import {Stack ,Button} from "react-bootstrap"
import { formatCurrency } from "../utilities/FormatCurrency"

type CartItemProps = {
    id : number
    quantity : number
}

const CartItem = ({id , quantity} : CartItemProps) => {
    const {remove} = useShoppingCart()
    const item = products.find(item => item.id === id)
    if(item == null) return null
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.images[0]} style={{width : "125px" , height :"75px" , objectFit  :"cover"}} />
        <div className="me=auto">
            <div> {item.title} { quantity > 1 && (
                <span className="text-muted" style={{fontSize : "0.65rem"}}> X {quantity} </span> 
            )}  </div>
            <div className="text-muted" > {formatCurrency(item.price)} </div>
        </div>
        <div>
        {formatCurrency(item.price * quantity)}
        </div>
        <Button size="sm" variant="outline-danger" onClick={()=>remove(item.id)}>&times;</Button>
    </Stack>
  )
}

export default CartItem