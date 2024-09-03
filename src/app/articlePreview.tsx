'use client';

import { useState } from 'react';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';

type ArticlePreviewProps = {
  name: string;
  header: string;
};

export default function ArticlePreview({ name, header }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(true);
  };

  return (
    <>
      <AppLink href={ROUTING.article(name)}>{header}</AppLink>
      <button type="button" onClick={handleClick}>
        {liked ? '👍' : 'like'}
      </button>
    </>
  );
}
