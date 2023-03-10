import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";


function validateUserCreate(username: string, emailAddress: string, newPassword1, newPassword2, userList) {


    // const docRef = await getDocs(collection(database, "users"))
// console.log(userList)
    // var userList = docRef.docs.map(doc => doc.data())
    if (!username) {
        throw Error("No username detected. Please enter a username")
    }
    if (username.length > 15) {
        throw Error(`Name is too long, maximum length is 15, recieved ${username.length}`)
    } if (username.length < 5) {
        throw Error(`Name is too short, minimum length is 5, recieved ${username.length}`)
    }
    if (userList.find(u => u.username === username)) {
        throw Error(`Username already exists. Select a different username`)
    } if (!emailAddress) {
        throw Error(`No email address detected. Please enter an email address`)
    }
    if (emailAddress.length > 64) {
        throw Error(`Email is too long. Max length is 64, recieved ${emailAddress.length}`)
    } if (userList.find(u => (u as any).emailAddress === emailAddress)) {
        throw Error(`Email is already being used. Select a different email`)
    } if (!newPassword1 || !newPassword2) {
        throw Error("Passwords are not filled out.")
    }
    if (newPassword1 !== newPassword2) {
        throw Error("Passwords do not match.")
    } if (newPassword1.length < 5) {
        throw Error("Minimum password length is 5.")
    }
}

export default validateUserCreate