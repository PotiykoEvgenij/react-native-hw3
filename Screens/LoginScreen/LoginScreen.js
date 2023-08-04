import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image, Keyboard } from 'react-native';
// import backgroundImage from '../../Image/BG.png';
import styles from '../../components/Styles';
const backgroundImage = require('../../assets/Images/BG.png');
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const handleInputFocus = () => {
        setIsKeyboardOpen(true);
    };

    const handleInputBlur = () => {
        setIsKeyboardOpen(false);
  };
  
  return (
    <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.bgImage} resizeMode="cover">
                <KeyboardAwareScrollView  contentContainerStyle={styles.contentContainer}>
                    <View style={styles.form}>
                        <Text style={styles.title}>Увійти</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Адреса електронної пошти"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Пароль"
                            secureTextEntry={true}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        {isKeyboardOpen ? null : (
                            <>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Увійти</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.link}>
                                    <Text style={styles.linkText}>Немає акаунту? Зареєструватися</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   registrationContainer: {
//     height: 549,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default LoginScreen;