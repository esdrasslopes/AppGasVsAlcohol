import { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";

import Status from "./src/components/Status";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alcool: null,
      gasolina: null,
      finalValue: null,
      visibleModal: false,
    };

    this.calc = this.calc.bind(this);

    this.validDigits = this.validDigits.bind(this);
  }

  validDigits(text) {
    return text.replace(/[^ 0-9,]/g, "");
  }

  handleAlcool = (text) => {
    const alcoolUpdate = this.validDigits(text);

    this.setState({
      ...this.state,
      alcool: alcoolUpdate,
    });
  };

  handleGasolina = (text) => {
    const gasolinaUpdate = this.validDigits(text);

    this.setState({
      ...this.state,
      gasolina: gasolinaUpdate,
    });
  };

  calc() {
    if (this.state.gasolina === null || this.state.alcool === null) {
      alert("Os valores precisam ser preenchidos");
      return;
    }

    const gasolinaUpdate = parseFloat(this.state.gasolina.replace(",", "."));

    const alcoolUpdate = parseFloat(this.state.alcool.replace(",", "."));

    const finalValue = alcoolUpdate / gasolinaUpdate;

    this.setState({
      gasolina: gasolinaUpdate,
      alcool: alcoolUpdate,
      finalValue: finalValue,
    });

    this.setState({
      gasolina: gasolinaUpdate,
      alcool: alcoolUpdate,
      finalValue: finalValue,
      visibleModal: true,
    });
  }

  toogleModal = () => {
    this.setState({
      gasolina: null,
      alcool: null,
      finalValue: null,
      visibleModal: !this.state.visibleModal,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.finalValue === null && (
          <>
            <View style={styles.imageContainer}>
              <Image source={require("./src/img/logo.png")} />
            </View>
            <Text style={styles.title}>Qual a melhor opção?</Text>
            <View style={styles.form_container}>
              <Text style={styles.inputText}>Álcool (preço por litro):</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Ex: 4,60"
                  style={styles.input}
                  value={this.state.alcool}
                  onChangeText={(value) => this.handleAlcool(value)}
                />
              </View>
            </View>
            <View style={styles.form_container}>
              <Text style={styles.inputText}>Gasolina (preço por litro):</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Ex: 6,60"
                  style={styles.input}
                  value={this.state.gasolina}
                  onChangeText={(value) => this.handleGasolina(value)}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.btnCalc} onPress={this.calc}>
              <Text style={styles.btnText}>Calcular</Text>
            </TouchableOpacity>
          </>
        )}

        <Modal animationType="fade" visible={this.state.visibleModal}>
          <View style={styles.modalContainer}>
            <Status
              alcool={this.state.alcool}
              gasolina={this.state.gasolina}
              finalValue={this.state.finalValue}
              toogleModal={this.toogleModal}
            />
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    paddingTop: 40,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontSize: 28,
    marginBottom: 15,
  },
  form_container: {
    width: "100%",
    paddingHorizontal: 20,
  },
  inputText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 18,
    padding: 10,
  },
  btnCalc: {
    backgroundColor: "#e64a00",
    padding: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
