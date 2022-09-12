import {Card , Button} from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import {formatCurrency} from "../utilities/FormatCurrency"

type StoreItemProps ={
    id : number
    price : number
    images : []
    title : string
}



const StoreItem = ({id , images , price , title} : StoreItemProps) => {
    const {getItemQuantity , increase ,decrease , remove} = useShoppingCart()

    const quantity = getItemQuantity(id)
  return (
    <>

    <Card className="h-100">
        <Card.Img variant="top" src={images[0]} height="200px" style={{objectFit : "cover"}}></Card.Img>

        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-item-baseline mb-4">
                <h3>{title}</h3>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {
                    quantity === 0 ? ( 
                        <Button className="w-100" onClick={()=> increase(id)}>+ Add to card</Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{gap : "0.5rem"}}>

                            <div className="d-flex align-items-center justify-content-center" style={{gap : "0.5rem"}}>
                                 <Button onClick={()=> decrease(id)}>-</Button>
                                <div > <span className="fs-3">{quantity}</span>in card </div>
                                <Button onClick={()=> increase(id)}>+</Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={()=> remove(id)}>Remove</Button>
                            
                        </div>
                    )
                }
            </div>
        </Card.Body>
    </Card>
    </>
  )
}

export default StoreItem