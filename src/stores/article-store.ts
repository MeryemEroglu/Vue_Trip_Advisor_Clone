import { defineStore } from 'pinia';
import {
  Timestamp,
  doc,
  getDoc,
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from 'src/boot/firebase';
// Define the article store
export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [] as Article[],
  }),

  actions: {
    // Getter function to fetch all articles from Firestore DB
    async fetchArticles() {
      try {
        // Firestore'dan veri çekme
        const querySnapshot = await getDocs(collection(db, 'Article'));
        const articles = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as Article;
        });
        this.articles = articles;
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    },

    // Getter function to fetch article by ID from Firestore DB
    async fetchArticleById(articleId: string): Promise<Article | null> {
      try {
        // Fetch article from Firestore DB based on ID
        const docRef = doc(db, 'Article', articleId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Return the fetched article
          console.log('Document data:', docSnap.data(), docSnap.id);
          return { ...docSnap.data(), id: docSnap.id } as Article;
        } else {
          console.log('No such document!', articleId);
          return null;
        }
      } catch (error) {
        console.error(`Failed to fetch article with ID ${articleId}:`, error);
        return null;
      }
    },
  },
});

// Define the Article type
interface Article {
  id: string;
  Title: string;
  ReadTime: number;
  ArticleImage: string;
  CreatedDate: Timestamp;
  MainText: string;
  AuthorName: string;
  AuthorImage: string;
}
