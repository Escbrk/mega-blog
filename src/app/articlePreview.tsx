'use client';

import {  useState } from 'react';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';
import { articleStorage } from './ArticleStorage';

type ArticlePreviewProps = {
  name: string;
  header: string;
};

export default function ArticlePreview({ name, header }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(articleStorage.liked(name));

  const like = () => {
    articleStorage.like(name);
    setLiked(true);
  };

  return (
    <>
      <AppLink href={ROUTING.article(name)}>{header}</AppLink>
      <button type="button" onClick={like}>
        {liked ? '👍' : 'like'}
      </button>
    </>
  );
}
