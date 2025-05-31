"use strict";

import { Dimensions, StyleSheet } from "react-native";
const {
  width: viewportWidth
} = Dimensions.get("window");
function wp(percentage) {
  const value = percentage * viewportWidth / 100;
  return Math.round(value);
}
const styles = StyleSheet.create({
  container: {
    width: wp(80),
    backgroundColor: "white",
    flexDirection: "row"
  },
  flagButtonView: {
    width: wp(20),
    height: 50,
    minWidth: 32,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  flagButtonExtraWidth: {
    width: wp(23)
  },
  shadow: {
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 1,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  dropDownImage: {
    height: 14,
    width: 12
  },
  textContainer: {
    flex: 1,
    textAlign: "left",
    flexDirection: "row",
    alignItems: "center"
  },
  codeText: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: "500",
    color: "#000000"
  },
  numberText: {
    fontSize: 16,
    color: "#000000",
    flex: 1
  }
});
export default styles;
//# sourceMappingURL=styles.js.map