import React, {Component} from 'react'

class FooterComponent extends Component{
    render(){
        return(
            <footer className="footer" style={{backgroundColor:'#53C279'}}>
                <span className="text-muted">Dados de rodapé, copyright, etc...</span>
            </footer>
        )
    }
}

export default FooterComponent