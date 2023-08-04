import { StyleSheet } from "react-native";
// const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    bgImage: {
        // flex: 1,
        // zIndex: 40,
        // width: '100%',
        // height: '100%',
        ...StyleSheet.absoluteFillObject,
        zIndex: 40,
        backgroundColor: 'transparent',
    },

    container: {
        // zIndex: 50,
        // flex: 1,
        flex: 1,
        // width: '100%',
        // height: '100%',

        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "flex-end",
    },

    contentContainer: {
        flexGrow: 1,
        justifyContent: "flex-end",
    },

    avaWrapper: {
        position: "absolute",
        backgroundColor: "#F6F6F6",
        top: 0,
        left: "50%",
        transform: [{ translateX: -50 }, {translateY: -50 }],
        // justifyContent: "center",
        width: 120,
        height: 120,
        // backgroundColor: "#fff",
        borderRadius: 16,
    },

    addIcon: {
        position: "absolute",
        right: -14,
        bottom: 14,
        // width: 120,
        // height: 120,
    },

    form: {
        position: "relative",
        paddingTop: 92,
        paddingRight: 16,
        paddingBottom: 45,
        paddingLeft: 16,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    input: {
        height: 50,
        width: '100%',
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        color: "#BDBDBD",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 16,
        fontSize: 16,
    },

    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    title: {
        marginBottom: 32,
        color: "#212121",
        fontSize: 30,
        fontWeight: "500",
        textAlign: "center",
    },

    button: {
        marginTop: 27,
        backgroundColor: "#FF6C00",
        width: '100%',
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
    },

    link: {
        marginTop: 16,
        marginBottom: 45,
        textAlign: "center",
    },
    linkText: {
        color: "#1B4371",
        fontSize: 16,
        // fontWeight: "500",
        textAlign: "center",
    }
});

export default styles;