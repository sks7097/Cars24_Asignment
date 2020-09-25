import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        container: {
            width: '100%',
            height: '100%'
        },
        innerCOntainer: {
            width: '100%',
            height: '100%'
        },
        noDataLabel: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
        },
        getDataBtn: {
            backgroundColor: "black",
            paddingVertical: 5,
            paddingHorizontal: 20,
            marginTop: 10,
            borderRadius: 5
        },
        getDataLabel: {
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            alignSelf: "center"
        },
        imageHolder: {
            margin: 5,
            height: 160,
            flex: 1,
            position: 'relative'
        },
        image: {
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            borderRadius: 5
        },
        textViewHolder: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.75)',
            paddingHorizontal: 10,
            paddingVertical: 13,
            alignItems: 'center'
        },
        textOnImage: {
            color: 'white'
        },
        loadingContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        loadingText: {
            paddingTop: 10,
            fontSize: 18,
            color: 'black'
        },
        buttonDesign: {
            padding: 15,
            backgroundColor: '#fca652'
        },
        buttonText: {
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16
        },

        modalImg: {
            width: 250,
            height: 250,
            borderRadius: 5
        }
    });

export default styles;