import React ,{useState} from 'react';
import {StyleSheet,Text,View,FlatList} from 'react-native';
import Cita from './componentes/Cita';


const App= () => {

  // definir el state de citas
  const [citas,setCitas] = useState([
    {id:"1", paciente :"Hook", propietario:'Juan', sintomas: "No come"},
    {id:"2", paciente :"rect", propietario:'Yonathan', sintomas: "No rie"},
    {id:"3", paciente :"native", propietario:'david', sintomas: "No baila"}
  ]);


//eliminar paciente del state de
  const eliminarPaciente = id => {
    setCitas( (citasActuales) => {
          return citasActuales.filter(cita => cita.id !== id);

    })


  }


  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>

      <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas': 'No hay citas, Agrega una'}</Text>
    <FlatList 
      data={citas}
      renderItem={ ({item}) => <Cita item= {item} eliminarPaciente={eliminarPaciente}/>} 
      keyExtractor={ cita => cita.id}/>

  
   </View>
  );
};

const styles = StyleSheet.create({
 contenedor:{
   backgroundColor:'#AA076B',
   flex:1

 },
 titulo:{
   color:'#FFF',
   marginTop:40,
   marginBottom:20,
   fontSize:23,
   fontWeight:'bold',
   textAlign:'center'
 }
});

export default App;
