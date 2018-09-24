import React from 'react';

import Container from '../components/Container';
import NotFoundComp from '../components/NotFound';

class NotFound extends React.Component {
    render() {
        return (
            <Container pageClass="not-found-page" 
                content={<NotFoundComp name="Halaman"/>}
                >
            </Container>
        )
    }
}

export default NotFound;