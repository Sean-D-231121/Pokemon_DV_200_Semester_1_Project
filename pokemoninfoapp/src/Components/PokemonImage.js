
import { Card, Col, Row } from "react-bootstrap";
const PokemonImage = (props) =>{
return(
    <Col>
    <img src={props.Image}></img>
    </Col>
)
}
export default PokemonImage