import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MaxWidthWrapper } from "@/components/ui/maxWidthWrapper/MaxWidthWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock } from "lucide-react";

export const TransactionLoadingSkeleton = () => {
  return (
    <MaxWidthWrapper className="md:w-[600px] lg:w-[800px]">
      <div className="mb-6">
        <Skeleton className="h-4 w-32" />
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center rounded-t-lg border-b pb-6 bg-blue-50">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <div className="relative">
              <Clock className="h-10 w-10 text-blue-600 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="space-y-3">
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>

          <div className="mt-4 space-y-2">
            <div className="w-full bg-blue-200 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
            <Skeleton className="h-4 w-56 mx-auto" />
          </div>
        </CardHeader>

        <CardContent className="pt-6 px-6">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Skeleton className="h-4 w-32 mx-auto" />
              <Skeleton className="h-10 w-48 mx-auto" />
            </div>

            <div className="space-y-4">
              <div className="flex space-x-1">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 flex-1" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-80" />
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-3 px-6 pb-6">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
};
