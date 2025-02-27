import { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

class Status extends Component {
  render() {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.imageContainer}>
          <Image source={require("../img/gas.png")} />
        </View>

        <Text style={styles.title}>
          Compensa usar {this.props.finalValue < 0.7 ? "Álcool" : "Gasolina"}
        </Text>

        <View style={styles.pricesContainer}>
          <Text style={styles.priceTitle}>Com os preços</Text>
          <Text style={styles.priceText}>
            Álcool: R$
            {this.props.alcool ? this.props.alcool.toFixed(2) : "0.00"}
          </Text>
          <Text style={styles.priceText}>
            Gasolina: R$
            {this.props.gasolina ? this.props.gasolina.toFixed(2) : "0.00"}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.btnCalc}
          onPress={this.props.toogleModal}
        >
          <Text style={styles.btnText}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#00FF00",
    textAlign: "center",
    fontSize: 28,
  },
  pricesContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  priceTitle: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
  priceText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: 300,
  },
  btnCalc: {
    borderColor: "#e64a00",
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnText: {
    color: "#e64a00",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default Status;
