import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getFridge = async ()=> {
    try {
        const FridgeRef = collection(db,"fridge");
        const querySnapshot = await getDocs(FridgeRef);

        if(querySnapshot.empty){
            console.log("No data")
            return [];
        }        

        const FridgeList = [];
        querySnapshot.forEach((doc)=>{
            FridgeList.push({...doc.data()})
        })

        return FridgeList;

    } catch (error) {
        console.error("Error rertrieving Fridge: ",error)
        return [];
    }
}

