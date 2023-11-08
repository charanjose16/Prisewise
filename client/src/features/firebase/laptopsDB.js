import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getLaptops = async ()=> {
    try {
        const LaptopsRef = collection(db,"laptops");
        const querySnapshot = await getDocs(LaptopsRef);

        if(querySnapshot.empty){
            console.log("No data")
            return [];
        }        

        const LaptopsList = [];
        querySnapshot.forEach((doc)=>{
            LaptopsList.push({...doc.data()})
        })

        return LaptopsList;

    } catch (error) {
        console.error("Error rertrieving Laptops: ",error)
        return [];
    }
}

