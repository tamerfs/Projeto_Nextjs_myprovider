import { Button } from '@mui/material';
import { FormatadorService } from '../../services/FormatadorService'; 
import { Provedor } from '../../@types/provedor';
import { Foto, Informacoes, ItemLista, ListaStyled , Nome, Valor, Descricao, ListaVazia} from './Lista.style';

interface ListaProps{
    provedores: Provedor[],
    onSelect: (provedor: Provedor) => void
}

const Lista = (props: ListaProps) =>{
    return (
        <>
        {props.provedores.length > 0 ? (
            <ListaStyled>
                {props.provedores.map(provedor =>(
                    <ItemLista key={provedor.id}>
                    <Foto src={provedor.foto} />
                    <Informacoes>
                        <Nome>{provedor.nome}</Nome>
                        <Valor>{FormatadorService.valorMonetario(provedor.preco)} per hour</Valor>
                        <Descricao>{FormatadorService.limitarTexto(provedor.descricao, 50)}</Descricao>
                        <Button onClick={()=> props.onSelect(provedor)} sx={{ width: '70%'}}>Marcar Aula com {provedor.nome}</Button>
                    </Informacoes>
                    </ItemLista>
                ))}        
            </ListaStyled>
        ) : ( 
            <ListaVazia>
                <p>Servidor voltou com: 0 rows from request</p>
            </ListaVazia>
        )}
        </>
    )
}

export default Lista