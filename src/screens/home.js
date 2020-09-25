import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import ImageZoom from 'react-native-image-pan-zoom';

//redux imports
import { connect } from 'react-redux';
import { anotherName } from '../redux/actions/myaction';

//local imports
import styles from '../styles/style';
import ImageComponent from '../components/ImageComponent';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allData: [],
            item: "",
            imagesData: null,
            loading: true,
            gridView: true,
            btnText: 'Show List'
        }
    }

    componentDidMount() {
        this.props.changeName()
    }

    /**
     * @param {row Item passed and saved to state} item 
     * Usage: open Modal and show Image(row item) clicked.
     */
    openQuotationModal(item) {
        this.setState({ item: item });
        this.Scrollable.open();
    }

    /**
    * Usage: close Modal.
    */
    closeQuotationModal() {
        this.Scrollable.close();
    }

    /**
    * Usage: Change screen view as List or Grid.
    */
    changeView = () => {
        this.setState({ gridView: !this.state.gridView }, () => {
            if (this.state.gridView) {
                this.setState({ btnText: 'Show List' });
            } else {
                this.setState({ btnText: 'Show Grid' });
            }
        });
    }

    /**
    * Usage: Get all data from Redux.
    */
    getallData = () => {
        this.setState({ allData: this.props.mylist });
    }

    /**
    * Usage: perform opening modal on row item click.
    */
    rowItemCLick = (data) => {
        this.openQuotationModal(data);
    }

    render() {
        return (
            <View>
                {this.state.allData.length ? <View style={styles.container}>
                    {
                        <View style={styles.innerCOntainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.buttonDesign} onPress={this.changeView}>
                                <Text style={styles.buttonText}>{this.state.btnText}</Text>
                            </TouchableOpacity>

                            <FlatList keyExtractor={(item) => item.id}
                                key={(this.state.gridView) ? 1 : 0}
                                numColumns={this.state.gridView ? 2 : 1}
                                data={JSON.parse(this.state.allData)}
                                renderItem={({ item }) => <ImageComponent imageURI={item.download_url} name={item.author} click={this.rowItemCLick.bind(this)} />
                                } />
                        </View>
                    }
                </View> : <View style={styles.noDataLabel}><Text>No data Found</Text>

                        <TouchableOpacity onPress={() => this.getallData()}
                            style={styles.getDataBtn}
                        >
                            <Text style={styles.getDataLabel}>Get Data</Text>
                        </TouchableOpacity>
                    </View>}



                <RBSheet
                    ref={ref => {
                        this.Scrollable = ref;
                    }}
                    closeOnDragDown={false}
                    height={Dimensions.get("window").height / 1.4}
                    customStyles={{
                        container: {
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTopEndRadius: 15,
                            borderTopStartRadius: 15
                        }
                    }}>

                    <View>
                        <ImageZoom
                            cropWidth={Dimensions.get('window').width}
                            cropHeight={Dimensions.get('window').height}
                            imageWidth={250}
                            imageHeight={250}>
                            <Image style={styles.modalImg}
                                source={{ uri: this.state.item }} />
                        </ImageZoom>
                    </View>
                </RBSheet>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { mylist: state.name }
}

const mapDispatchToProps = (dispatch) => {
    return { changeName: () => { dispatch(anotherName()) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
