import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/color'
import HeaderComponents from '../../components/HeaderComponents'

let Alldata = [
    {
        username: 'xyz',
        userimage: '',
        uservideo: ''
    }
]

const UserInsta = ({ navigation }) => {


    const data = Array.from({ length: 50 }, (_, index) => ({ key: index.toString(), text: `Item ${index}` }));
    const BottomMenu = () => {
        return (

            <View style={styles.BottomViewContainer} >
                <View style={styles.ViewMain}>

                    <View>
                        <Image source={require('../../assets/home.png')} style={{
                            height: 20,
                            width: 20,
                        }} />
                    </View>
                    <View>
                        <Image source={require('../../assets/search.png')} style={{
                            height: 20,
                            width: 20,
                        }} />
                    </View>
                    <View>
                        <Image source={require('../../assets/plus.png')} style={{
                            height: 20,
                            width: 20,
                            tintColor: '#fff',
                            backgroundColor: '#ccc',
                            borderRadius: 16
                        }} />
                    </View>
                    <View>
                        <Image source={require('../../assets/default_user.png')} style={{
                            height: 20,
                            width: 20,
                        }} />
                    </View>

                </View>
            </View>

        )
    }
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.text}</Text>
        </View>
    );

    return (
        <View style={{
            width: '100%',
            height: '100%',
        }}>
            <HeaderComponents navigation={navigation} title={'Home'} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}

            />

            <View>
                <BottomMenu />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
    BottomViewContainer: {

        height: 50,
        backgroundColor: COLORS.primary,
    },
    ViewMain: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        paddingHorizontal: 30
    },
    footer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
})

export default UserInsta


