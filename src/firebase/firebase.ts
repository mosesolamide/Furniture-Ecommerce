  import { initializeApp } from "firebase/app"
  import { getFirestore, collection, getDocs } from "firebase/firestore"
  import { getAuth, GoogleAuthProvider } from "firebase/auth"

  const firebaseConfig = {
    apiKey: "AIzaSyCQ12u-ujmIRvdHRCCKkIZGql7C35sjSqQ",
    authDomain: "furniture-99359.firebaseapp.com",
    projectId: "furniture-99359",
    storageBucket: "furniture-99359.firebasestorage.app",
    messagingSenderId: "576158838904",
    appId: "1:576158838904:web:c1126a60e0c77b43f0bd8d"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export const db = getFirestore(app)
  export const googleProvider = new GoogleAuthProvider() 

  const furnitureCollection = collection(db, "furnitures")

  export type FurnitureType = {
    id: string
    imageUrl: string
    name: string
    price: number
  }


  export async function getFurniture(): Promise<FurnitureType[]> {
    const querySnapshot = await getDocs(furnitureCollection)
    const results: FurnitureType[] = []
    querySnapshot.forEach((doc) => {
      results.push({ ...(doc.data() as Omit<FurnitureType, 'id'>), id: doc.id })
    })
    return results
  }


