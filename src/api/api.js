import * as axios from "axios";

import NetInfo from "@react-native-community/netinfo";

export const getData = {
    getProducts: () => {
        return axios.get('https://d-element.ru/test_api.php')
    }
}

export const checkInternetConnect = () => {
    return NetInfo.fetch().then(state => {
        return state.isConnected
    })
}
