import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getTablets = async ()=> {
    try {
        const TabletsRef = collection(db,"tablets");
        const querySnapshot = await getDocs(TabletsRef);

        if(querySnapshot.empty){
            console.log("No data")
            return [];
        }        

        const TabletsList = [];
        querySnapshot.forEach((doc)=>{
            TabletsList.push({...doc.data()})
        })

        return TabletsList;

    } catch (error) {
        console.error("Error rertrieving Tablets: ",error)
        return [];
    }
}

