import React from 'react';
import { SafeAreaView,Text,Image,TouchableOpacity,StyleSheet,Dimensions, View} from 'react-native';
import waterringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
export  function Welcome(){
    const navigation = useNavigation();
    function handleStart(){
        navigation.navigate('UserIdentification');
    }
    return(
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Text style={style.title}>
                    Gerencie  {'\n'}
                    suas plantas de {'\n'}
                    forma fácil
                </Text>
                <Image source={waterringImg} 
                style={style.image}
                resizeMode = 'contain'
                />

                <Text style={style.subtitle}>

                    Não esqueça de regas suas plantas. 
                    Nós cuidamos de lembrar sempre que você 
                
                    precisar.
                </Text>
                <TouchableOpacity  
                    style={style.button}
                    activeOpacity={0.7}
                    onPress={handleStart}>
                        <Feather name="chevron-right" 
                        style={style.buttonIcon}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container : {
        flex : 1,
        
    },
    wrapper :{
        flex : 1,
        alignItems : 'center',
        // sujeito a colar nas bordas
        //justifyContent : 'space-between'
        // não cola de forma nenhuma nas bordas
        justifyContent : 'space-around', 
        paddingHorizontal : 20
    },
    title : {
        fontSize : 28,
        textAlign : 'center',
        color : colors.heading,
        marginTop : 38,
        fontFamily : fonts.heading,
        lineHeight : 34
    },
    subtitle : {
        textAlign : 'center',
        fontSize : 18,
        paddingHorizontal : 20,
        color : colors.heading,
        fontFamily : fonts.text
    },
    button : {
        backgroundColor :colors.green,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 16,
        marginBottom : 10,
        height : 56,
        width : 56
    },
    buttonIcon :{
        color : colors.white,
        fontSize : 32
    },image :{
        height : Dimensions.get('window').width * 0.7
    }
});