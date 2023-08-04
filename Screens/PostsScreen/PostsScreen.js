import React from "react";
import { View, Text, Image } from "react-native";

import styles from "../../components/Styles";

const ava = require('../../assets/Images/ava.png');
const logOutIco = require('../../assets/Images/logOut.png');

const PostsScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Публікації</Text>
                <Image style={{ width: 60, height: 60 }}source={ava}/>
            </View>
        </View>
    );
};

export default PostsScreen;