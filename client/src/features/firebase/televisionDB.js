import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getTelevision = async ()=> {
    try {
        const TelevisionRef = collection(db,"television");
        const querySnapshot = await getDocs(TelevisionRef);

        if(querySnapshot.empty){
            console.log("No data")
            return [];
        }        

        const TelevisionList = [];
        querySnapshot.forEach((doc)=>{
            TelevisionList.push({...doc.data()})
        })

        return TelevisionList;

    } catch (error) {
        console.error("Error rertrieving Television: ",error)
        return [];
    }
}

