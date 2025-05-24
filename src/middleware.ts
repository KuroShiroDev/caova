import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/', '/projects', '/api/transactions/create-recharge', '/api/wompi-webhook']);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  //TODO: preguntar a luis por que añadio api/edgestore
  matcher: ['/((?!.+\\.[\\w]+$|_next|api/edgestore).*)', '/', '/(api|trpc)(.*)'],
};
