import { Box, Button, Dialog, DialogActions, formControlLabelClasses, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex';

const Home: NextPage = () => {
  
  const {
    listaProvedores,
    nome,
    setNome,
    email,
    setEmail,
    provedorSelecionado,
    setProvedorSelecionado,
    marcarAula,
    mensagem,
    setMensagem
  } = useIndex(); 
  // usado o destructor e tirado do objeto criado a listaProvedores de dentro da função passada

  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main'}}>
        <Lista 
          provedores ={listaProvedores}
          onSelect={(provedor)=>setProvedorSelecionado(provedor)} 
        />
      </Box>
      <Dialog onClose={()=> setProvedorSelecionado(null)} open={provedorSelecionado !== null} fullWidth PaperProps={{sx:{p:5} }}>
        <Grid container spacing={2}>
          <Grid item xs={12}> {/* tamanho em cada um é de 12 posições, entao coloando 12 ele ocupa o tamanhnho total */ }
            <TextField 
              label = "Digite o Nome"
              type = "text"
              fullWidth
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
          <TextField 
              label = "Digite o E-mail"
              type = "email"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{mt:5}}>
          <Button onClick={()=> setProvedorSelecionado(null)}>Cancelar</Button>
          <Button onClick={()=>marcarAula() }>Marcar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar 
        message={mensagem} 
        open={mensagem.length>0}
        autoHideDuration={3000}
        onClose={()=> setMensagem('')}
      />
      </div>
  )
}

export default Home
