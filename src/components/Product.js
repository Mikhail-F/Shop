import React from 'react'
import {Image, Text, View, StyleSheet} from "react-native";

const Product = ({item}) => {
    return (
        <View style={styles.wrapper}>
            <Image source={{uri: item.image}} style={styles.img}/>
            <Text style={styles.article}>{item.article}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price ? `${item.price} руб.` : 'Нет цены'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '45%',
        margin: 10,
        marginTop: 20
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 20
    },
    article: {
        fontFamily: 'proximaNova-regular',
        color: '#8B9BA9',
        fontSize: 13,
        lineHeight: 18,
        marginTop: 8
    },
    name: {
        fontFamily: 'proximaNova-regular',
        color: 'black',
        fontSize: 13,
        lineHeight: 18,
        marginVertical: 8
    },
    price: {
        fontFamily: 'proximaNova-bold',
        color: 'black',
        fontSize: 15,
        lineHeight: 20
    }
})

export default Product