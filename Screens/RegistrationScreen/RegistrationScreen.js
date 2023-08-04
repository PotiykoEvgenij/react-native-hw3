import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image, Keyboard } from 'react-native';
import styles from '../../components/Styles';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const backgroundImage = require('../../assets/Images/BG.png');
const addIcon = require('../../assets/Images/addIcon.png');
const delIcon = require('../../assets/Images/delIcon.png');
const ava = require('../../assets/Images/ava.png');

const RegistrationScreen = () => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const handleInputFocus = () => {
        setIsKeyboardOpen(true);
    };

    const handleInputBlur = () => {
        setIsKeyboardOpen(false);
    };

    return (
        // <ImageBackground source={backgroundImage} style={styles.bgImage} >
        //     <KeyboardAvoidingView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
        //         <View style={styles.form}>
        //             <Text style={styles.title}>Реєстрація</Text>
        //             <TextInput style={styles.input} placeholder="Логін" />
        //             <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
        //             <TextInput style={styles.input}
        //                 placeholder="Пароль"
        //                 secureTextEntry={true}
        //             />
        //             <Button title="Зареєстуватися" onPress={() => {}} />
        //         </View>
        //     </KeyboardAvoidingView>
        // </ImageBackground>
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.bgImage} resizeMode="cover">
                <KeyboardAwareScrollView  contentContainerStyle={styles.contentContainer}>
                    <View style={styles.form}>
                        <TouchableOpacity style={styles.avaWrapper}>
                            {/* <Image source={ava}  /> */}
                                <View style={styles.addIcon}>
                                <Image
                                    // style={styles.addIcon}
                                    source={addIcon}
                                    style={{ width: 30, height: 30 }}
                                />
                                </View>
                        </TouchableOpacity>
                        <Text style={styles.title}>Реєстрація</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Логін"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
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
                                    <Text style={styles.buttonText}>Зареєструватися</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.link}>
                                    <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
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
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 10,
//     },
//     input: {
//         height: 40,
//         width: '100%',
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 10,
//         paddingHorizontal: 10,
//     },
// });

export default RegistrationScreen;