import { delayed } from './delay';
import articles from './db.json';

export function getAllArticles() {
  return delayed(articles);
}
