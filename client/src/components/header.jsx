import 'bootstrap/dist/css/bootstrap.css'
import {Container} from 'react-bootstrap'

import '../style/Header.css'


const Header = () => {
    return (
        <div className="body">
            <Container className="content">This is a header</Container>
        </div>
    )
}

export default Header