import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className='py-12 container max-w-screen-sm centered'>
      <div className='animate-show border rounded-lg p-2'>
        <Loader2Icon size={30} className='animate-spin text-muted-foreground' />
      </div>
    </div>
  );
}
