import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.Familink",
  projectId: "662e7867001d362ba7ed",
  storageId: "662e7c7d000579a43fdb",
  databaseId: "662e7a82000a8228edc8",
  userCollectionId: "662e7aac0022ad0bf674",
  videoCollectionId: "662e7af10008862ec245",
};


const client = new Client();

client 
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform)


const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )
    if(!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username)

    await signIn(email,password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountid: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    )

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const signIn = async (email,password) => {
  try {
    const session = await account.createEmailSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
    
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if(!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountid', currentAccount.$id)]
    )
    if (!currentUser) throw Error;

    return currentUser.documents[0];

  } catch (error) {
    console.log(error);
  }
}
