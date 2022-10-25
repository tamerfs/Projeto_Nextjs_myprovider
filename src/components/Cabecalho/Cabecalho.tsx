import { CabecalhoContainer , Logo } from './Cabecalho.style';

const Cabecalho = () => {
    return (
            <CabecalhoContainer>
                <div>
                    <Logo src= "/img/myteacher.png"/>
                </div>
                <p>Encontre um professor perfeito para ti!</p>
            </CabecalhoContainer>
    )
}

export default Cabecalho;
