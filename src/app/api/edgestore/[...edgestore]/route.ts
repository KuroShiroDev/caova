import { initEdgeStore } from '@edgestore/server';
import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';

const es = initEdgeStore.create();

const edgestoreRouter = es.router({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cavoaProjects: es.imageBucket().beforeDelete(({ ctx, fileInfo }) => {
    return true;
  }),

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cavoaDocuments: es.fileBucket().beforeDelete(({ ctx, fileInfo }) => {
    return true;
  }),
});

const handler = createEdgeStoreNextHandler({
  router: edgestoreRouter,
});

export { handler as GET, handler as POST };

export type EdgeStoreRouter = typeof edgestoreRouter;
