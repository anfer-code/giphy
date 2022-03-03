import React, {Suspense} from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending() {
  const {show: isNearScreen, elementRef} = useNearScreen({distance: '500px'})

  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner /> }
      </Suspense>
    </div>
  )
};
