'use client';
const getLikeKey = (articleName: string) => `Escbrk_like_${articleName}`;

class ArticleStorage {

  private get storage() {
    return localStorage
  }

  private get isStorageReady() {
    return 'localStorage' in globalThis
  }


  like(articleName: string) {
    this.storage.setItem(getLikeKey(articleName), 'liked');
  }
    
  liked(articleName: string): boolean {
    if (!this.isStorageReady) {
      return false;
    }
    return this.storage.getItem(getLikeKey(articleName)) === 'liked';
  }
}

export const articleStorage = new ArticleStorage()