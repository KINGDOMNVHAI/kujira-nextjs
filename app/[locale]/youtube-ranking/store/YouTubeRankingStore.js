/*
    Store of YouTubeRanking screen
*/

import axios from "axios";

class YouTubeRankingStore {

    getAllChannelsMongoDB() {
        return axios.get('api/channels-all')
    }

    getAllChannelsMySQL() {
        return axios.get('http://localhost:8080/api/v1/public/channel/get-all')
    }

    searchChannelsMySQL(request) {
        return axios.post('http://localhost:8080/api/v1/public/channel/search', request)
    }












    // ===================================

    // async getAllChannels() {
    //     const result = await fetch("api/channels-all", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     return result.data;
    // }
}

export default YouTubeRankingStore;
