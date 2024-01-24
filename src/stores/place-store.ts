import { defineStore } from 'pinia';
import {
  Timestamp,
  doc,
  getDoc,
  collection,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from 'src/boot/firebase';
// Define the place store
export const usePlaceStore = defineStore('place', {
  state: () => ({
    places: [] as Place[],
  }),

  actions: {
    // Getter function to fetch all places from Firestore DB
    async fetchPlaces() {
      try {
        // Firestore'dan veri çekme
        const querySnapshot = await getDocs(collection(db, 'Places'));
        const places = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as Place;
        });
        this.places = places;
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    },

    // Getter function to fetch place by ID from Firestore DB
    async fetchPlaceById(placeId: string): Promise<Place | null> {
      try {
        // Fetch place from Firestore DB based on ID
        const docRef = doc(db, 'Places', placeId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Return the fetched place
          console.log('Document data:', docSnap.data(), docSnap.id);
          return { ...docSnap.data(), id: docSnap.id } as Place;
        } else {
          console.log('No such document!', placeId);
          return null;
        }
      } catch (error) {
        console.error(`Failed to fetch place with ID ${placeId}:`, error);
        return null;
      }
    },

    async togglePlaceFavorite(placeId: string) {
      try {
        // find the place in the store
        const place = this.places.find((place) => place.id === placeId);
        if (!place) {
          throw new Error(`Place with ID ${placeId} not found`);
        }
        place.isFavorite = !place.isFavorite;
        // update the place in the DB
        const docRef = doc(db, 'Places', placeId);
        await updateDoc(docRef, { isFavorite: place.isFavorite });
      } catch (error) {
        console.error(`Failed to fetch place with ID ${placeId}:`, error);
      }
    },
  },
});

// Define the Place type
interface Place {
  id: string;
  Category: string;
  Image: string;
  Rate: number;
  Rate1Count: number;
  Rate2Count: number;
  Rate3Count: number;
  Rate4Count: number;
  Rate5Count: number;
  Title: string;
  RateCount: number;
  isFavorite: boolean;
}
