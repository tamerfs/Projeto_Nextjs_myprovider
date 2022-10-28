import { useEffect, useState } from 'react';
import { Provedor } from './../../@types/provedor';
import { ApiService } from './../../services/ApiService';

export function useIndex(){
    
    const[listaProvedores, setListaProvedores] = useState<Provedor[]>([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [provedorSelecionado, setProvedorSelecionado] = useState<Provedor | null>(null);
    const [mensagem, setMensagem] = useState('');


    useEffect(()=> {
        ApiService.get('/provedores').then((args)=>{
            setListaProvedores(args.data) 
            // pega todo conteudo do backend pelo endpoint e passa como return os dados puxados em json
        })
    }, [])

    useEffect(()=> {
        limparForm();
    },[provedorSelecionado]) // quando passamos uma informaão dentro desse array na dependncia ele 
    //fica monitorando e quando ocorre uma alteração ele executa novamente as linhas d ecodigo de cima,
    //quando esta um array vazio somente uma vez ele executa

    function marcarAula(){
        if (provedorSelecionado !== null){
            if(validarDadosAula()){

                ApiService.post('provedores/'+provedorSelecionado.id+'/servico',{nome,email})
                .then(() => {
                    setProvedorSelecionado(null);
                    setMensagem("Pedido Cadastrado com sucesso");
                })
                .catch((error) =>{
                    setMensagem(error.response?.data.message);
                })
            }else{
                setMensagem("Preencha os dados requeridos corretamente")
            }
        }
    }

    function validarDadosAula(){
        return nome.length > 0 && email.length > 0;
    }
    function limparForm(){
        setNome("");
        setEmail("");
    }


    return{
         listaProvedores,  // cria uma chave com o conteudo da lista
         nome,
         setNome,
         email,
         setEmail,
         provedorSelecionado,
         setProvedorSelecionado,
         marcarAula,
         mensagem,
         setMensagem
    }
}
