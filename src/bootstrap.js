import * as Font from "expo-font";

export const bootstrap = async () => {
    try {
        await Font.loadAsync({
            'proximaNova-bold': require('../assets/fonts/ProximaNova-Bold.ttf'),
            'proximaNova-regular': require('../assets/fonts/ProximaNova-Regular.ttf'),
        })
    } catch (e) {
        console.log(e)
    }
}