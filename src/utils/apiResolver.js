import * as constants from '../constants'

export const getAPIResponse = async(temp, options, callback) => {

    let url = `${constants.locationURL}${temp}`;
    console.log("calling API::");
    await fetch(url, options)
        .then(res => {
            if (res.status !== 200) {
                console.log("there is some issue with the API::error::" + res.status);
                return;
            } else {
                return res.json();
            }

        })
        .then(res => callback(res))
        .catch(err => console.log("print error::" + err));

}