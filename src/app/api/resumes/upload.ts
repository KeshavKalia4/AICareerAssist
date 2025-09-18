import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../../../firebase";
import {
    doc,
    setDoc,
    collection,
    serverTimestamp,
    query,
    getDocs,
    orderBy,
    where,
    deleteDoc,
    getFirestore
} from "firebase/firestore";

interface FileMetadata {
    userId: string;
    uploadedAt: any;
    fileUrl: string;
}

export const saveFileMetadata = async (
    userId: string,
    fileUrl: string
) => {
    try {
        // point to a new doc inside "Users/{userId}/resumes"
        const fileRef = doc(collection(db, `Users/${userId}/resumes`));

        await setDoc(fileRef, {
            userId,
            fileUrl,
            uploadedAt: serverTimestamp(),
        });

        // return Firestore’s generated doc ID
        return fileRef.id;
    } catch (error) {
        console.error("Error saving file metadata:", error);
        throw error;
    }
};

export const fetchResumes = async (userId: string) => {
    try {
        // 1️⃣ Reference the user's resumes collection
        const resumesRef = collection(db, `Users/${userId}/resumes`);

        // 2️⃣ Build a query to order by upload time (newest first)
        const q = query(resumesRef, orderBy("uploadedAt", "desc"));

        // 3️⃣ Execute query
        const snapshot = await getDocs(q);

        // 4️⃣ Map Firestore docs to plain objects for frontend
        const resumes = snapshot.docs.map((doc) => ({
            id: doc.id,                 // Firestore document ID
            userId: doc.data().userId,
            fileUrl: doc.data().fileUrl,
            uploadedAt: doc.data().uploadedAt,
        }));

        return resumes;
    } catch (error) {
        console.error("Error fetching resumes:", error);
        throw error;
    }
};


export const deleteResume = async (
    userId: string,
    resumeId: string,
    fileUrl: string
) => {
    try {
        // 1️⃣ Delete metadata from Firestore
        await deleteDoc(doc(db, `Users/${userId}/resumes`, resumeId));

        // 2️⃣ Delete actual file from Storage
        const fileRef = ref(storage, fileUrl); // assumes fileUrl is the path in storage, not https URL
        await deleteObject(fileRef);

        return { success: true };
    } catch (error) {
        console.error("Error deleting resume:", error);
        throw error;
    }
};