import React, {Suspense} from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";
import './style.css';

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending() {
  const {isNearScreen, elementRef} = useNearScreen({distance: '100px'})

  console.log(isNearScreen);
  return (
    <div className="Basis" ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner /> }
      </Suspense>
    </div>
  )
};
