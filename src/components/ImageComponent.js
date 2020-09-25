import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/style';

export default class ImageComponent extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.imageHolder} onPress={() => this.props.click(this.props.imageURI)}>
                <Image source={{ uri: this.props.imageURI }} style={styles.image} />
                <View style={styles.textViewHolder}>
                    <Text numberOfLines={1} style={styles.textOnImage}>
                        {this.props.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}