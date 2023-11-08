import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getMobiles = async ()=> {
    try {
        const mobilesRef = collection(db,"mobiles");
        const querySnapshot = await getDocs(mobilesRef);

        if(querySnapshot.empty){
            console.log("No data")
            return [];
        }        

        const mobilesList = [];
        querySnapshot.forEach((doc)=>{
            mobilesList.push({...doc.data()})
        })

        return mobilesList;

    } catch (error) {
        console.error("Error rertrieving mobiles: ",error)
        return [];
    }
}

