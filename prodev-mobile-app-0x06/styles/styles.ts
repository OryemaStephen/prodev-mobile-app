import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        position: "relative"
    },
    navGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 11
    },
    largeText:{
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'left'
    },
    smallText: {
        fontSize: 12,
        color: '#7E7B7B',
        textAlign: 'left',
    },
    formGroup:{
        marginTop: 44
    },
    placeholderText: {
        fontSize: 18,
        color: '#7E7B7B',
        marginBottom: 7
    },
    inputField: {
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        borderColor: '#7E7B7B',
        paddingHorizontal: 10
    },
    passwordGroup: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: '#7e7b7b'
  },
  forgotPasswordText: {
    fontSize: 17,
    marginTop: 9,
    textAlign: 'right',
    color: '#34967C'
  },
  button: {
    backgroundColor: '#2B876E',
    height: 40,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 17,
    color: 'white'
  },
  socialMediaButton: {
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  socialMediaButtonText: {
    fontSize: 18,
    color: '#0D0D0D',
    fontWeight: 400
  },
  socialMediaButtonGroup: {
    gap: 10,
    marginTop: 25
  },
  dividerGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginTop: 10
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#c2c2c2",
    flex: 1
  },
  dividerText: {
    fontSize: 16,
    color: "#C2C2C2",
  },
  subTextGroup: {
    flex:1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 33,
    left: 30,
    right: 76
  },
  subText: {
    fontSize: 18,
    color: '#b5b5b5'
  },
  subTextJoin: {
    fontSize: 16,
    paddingLeft: 5,
    color: '#FFA800',
    fontWeight: 600
  },
})


export {
  styles
}