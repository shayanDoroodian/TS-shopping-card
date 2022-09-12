import { products } from "../data/products.js"
import { Row , Col} from "react-bootstrap"
import StoreItem from "../components/StoreItem.js"
const Items = () => {
 
  return (
    <>
      <h1>Items</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
      {
        products.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>
        ))
      }
      </Row>
    </>

  )
}

export default Items