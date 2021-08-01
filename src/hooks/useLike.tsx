import React from 'react';
import { createContext, useContext, useState } from 'react';

const likeState = {
  like: false,
};

// interface Character {
//   id: number;
//   like: false;
// }

// interface LikeContextData {
//   likes: Character[];
//   createLike: (isLiked, setIsLiked) => Promise<void>;
// }

const LikeContext = createContext(likeState);

export const LikeProvider: React.FC = ({ children }) => {
  const [isLiked, setIsLiked] = useState(likeState);

  return (
    <LikeContext.Provider value={{ isLiked, setIsLiked }}>
      {children}
    </LikeContext.Provider>
  );
};

export function useLike() {
  const context = useContext(LikeContext);

  return context;
}
