import React, { Suspense } from "react";

import MediaListContent from "@/components/Media/ListContent";
import { SpinLoader } from "@/components/shared/SpinLoader";
import { FeaturedMedia } from "@/components/Media/FeaturedMedia";

export default function Page() {
  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <FeaturedMedia />
      <MediaListContent />
    </Suspense>
  );
}
