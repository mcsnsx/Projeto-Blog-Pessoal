import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className="bgPost">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">O Projeto Blog Pessoal é um site onde as pessoas podem entrar e publicar pensamentos e opiniões criando uma espécie de mural de tarefas onde todos podem participar. Essa aplicação foi criada por mim, Maria Carolina, para fins educacionais  em Novembro de 2021 como um projeto individual da Generation Brasil no curso de Desenvolvedor FullStack Java Jr, com intensão de colocar em prática os conhecimentos adquiridos no decorrer do curso tanto no Back-end quanto no Front-end, seguindo as boas práticas de programação, além de implementar alguns elementos de segurança.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;