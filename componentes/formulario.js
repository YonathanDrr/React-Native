import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Formulario = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarFecha = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

   const confirmarHora = date => {
    console.warn('A date has been picked: ', date);
    hideTimePicker();
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Dueño:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Telefono Contacto:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => console.log(texto)}
            keyboardType="numeric"
          />
        </View>

        <View>
          <Button title="Ingresa la Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
          />
        </View>

         <View>
          <Button title="Ingresa la Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
          />
        </View>

        <View>
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '1.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 1,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default Formulario;
