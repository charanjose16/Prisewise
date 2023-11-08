import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getEarphones = async ()=> {
    try {
        const EarphonesRef = collection(db,"earphones");
        const querySnapshot = await getDocs(EarphonesRef);

        if(querySnapshot.empty){
            console.log("No data")
            return [];
        }        

        const EarphonesList = [];
        querySnapshot.forEach((doc)=>{
            EarphonesList.push({...doc.data()})
        })

        return EarphonesList;

    } catch (error) {
        console.error("Error rertrieving Earphones: ",error)
        return [];
    }
}

