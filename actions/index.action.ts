const queriesCollectionId =
  process.env.NEXT_PUBLIC_APPWRITE_QUERY_COLLECTION_ID || "";
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
import { databases, ID } from "@/lib/appwrite";

export const createQuery = async (data: any) => {
  try {
    console.log(data);
    return await databases
      .createDocument(databaseId, queriesCollectionId, ID.unique(), data)
      .then((res) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};
