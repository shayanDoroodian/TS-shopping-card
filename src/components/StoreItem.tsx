import {Card} from "react-bootstrap"
import {formatCurrency} from "../utilities/FormatCurrency"

type StoreItemProps ={
    id : number
    price : number
    images : []
    title : string
}



const StoreItem = ({id , images , price , title} : StoreItemProps) => {
const quantity = 0
  return (
    <>
    <h1>StoreItem</h1>
    <Card>
        <Card.Img variant="top" src={images[0]} height="200px" style={{objectFit : "cover"}}></Card.Img>

        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-item-baseline mb-4">
                <h3>{title}</h3>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
        </Card.Body>
    </Card>
    </>
  )
}

export default StoreItem