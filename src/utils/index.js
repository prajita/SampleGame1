import * as apiResolver from './apiResolver';
import * as constants from '../constants'


export const callFirstAPI = async(callback) => {
    let apiURLSuffix = 'challenge';
    const options = {
        method: 'GET',
        headers: {
            "userId": constants.userId
        }
    };
    await apiResolver.getAPIResponse(apiURLSuffix, options, (data) => { console.log(data); callback(data); });
}
export const callInputAPI = async (callback) => {
    let apiURLSuffix = 'challenge/input';
    const options = {
        method: 'GET',
        headers: {
            "userId": constants.userId
        }
    };
    await apiResolver.getAPIResponse(apiURLSuffix, options, (data) => { console.log(data); callback(data); });

}
export const callOutputAPI = async(count, callback) => {
    console.log("calling output API with count"+count);
    let apiInput={ "count": count }
    let apiURLSuffix = 'challenge/output';
    const options = {
        method: 'POST',
        headers: {
            "userId": constants.userId,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(apiInput)
    };
   await apiResolver.getAPIResponse(apiURLSuffix, options, (data) => { console.log(data); callback(data); });
}