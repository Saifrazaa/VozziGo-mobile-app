import { openDrawer, drawerInitialize, closeDrawer } from "./drawer";
import NavigationService from "./navigationService";
import { HttpService } from "./HttpServices";
import firebase from "react-native-firebase";
const storage = firebase.storage();
const sessionId = new Date().getTime();
const imageRef = storage.ref(`images/${sessionId}`);
var uploadProgress;
const FirebaseUploadImage = (url) => {
    var uri = new Promise((resolve, reject) => {
        imageRef.put(url).then(res => {
            const uri = res.downloadURL;
            resolve(uri)
        })
    })
    return uri.then(res => {
        return res;
    })
}
export {
    openDrawer,
    closeDrawer,
    drawerInitialize,
    NavigationService,
    HttpService,
    FirebaseUploadImage,
    uploadProgress
}