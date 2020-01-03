import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  /**
   * Gets entities documents
   * @param collectionName 
   * @returns  
   */
  getEntitiesDocuments(collectionName:string) {
    return this.firestore.collection(collectionName).snapshotChanges();
  }

  /**
   * Adds entity document
   * @param collectionName 
   * @param entity 
   * @returns  
   */
  addEntityDocument(collectionName:string,entity: any) {
    return this.firestore.collection(collectionName).add(entity);
  }

  /**
   * Updates entity document
   * @param collectionName 
   * @param entity 
   * @param id 
   * @returns  
   */
  updateEntityDocument(collectionName: string, entity: any, id: string) {
    return this.firestore.doc(collectionName + '/' + id).update(entity);
  }

  /**
   * Deletes entity document
   * @param collectionName 
   * @param id 
   * @returns  
   */
  deleteEntityDocument(collectionName: string, id: string) {
    return this.firestore.doc(collectionName + '/' + id).delete();
  }

  /**
   * Gets entity document
   * @param collectionName 
   * @param id 
   * @returns  
   */
  getEntityDocument(collectionName:string, id: string) {
    return this.firestore.collection(collectionName).doc(id).get()
  }

}
