import React, { Suspense } from "react";

import MediaListContent from "@/components/Media/ListContent";
import { SpinLoader } from "@/components/shared/SpinLoader";

export default function Page() {
  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <MediaListContent />
    </Suspense>
  );
}
