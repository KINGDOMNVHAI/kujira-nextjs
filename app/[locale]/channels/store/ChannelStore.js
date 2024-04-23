/*
    Store of YouTubeRanking screen
*/

import axios from "axios";

class ChannelStore {

    // var apiAdmin = "/api/v1/admin/";

    getAllChannels() {
        return axios.get('api/channels-all')
    }

    getAllChannelsMySQL() {
        return axios.get('http://localhost:8080/api/v1/public/channel/get-all')
    }

    // async findAllChannels() {
    //     const result = await fetch("api/channels-all", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     return result.data;
    // }
}

export default ChannelStore;
