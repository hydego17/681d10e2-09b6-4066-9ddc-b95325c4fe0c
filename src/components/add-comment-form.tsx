"use client";

import { useFormState } from "react-dom";

import { PostComment } from "@/types/schema";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addComment } from "@/app/actions";

import { SubmitButton } from "./submit-button";

type Props = {
  postId: number;
  onClose(): void;
  onCommentAdded(addedComment: PostComment): void;
};

export default function AddCommentForm({ postId, onClose, onCommentAdded }: Props) {
  // invoke server action within form state
  const [state, formAction] = useFormState(async (prevState: any, formData: FormData) => {
    const { data, errors } = await addComment(formData);

    // update comment (manually)
    if (!!data) {
      onCommentAdded(data);
    }
    return { data, errors };
  }, null);

  return (
    <div className='my-8 animate-show'>
      <form action={formAction} className='grid w-full gap-1.5'>
        <Textarea placeholder='Type your comment here.' name='body' />
        <input type='hidden' name='postId' value={postId} />
        <input type='hidden' name='userId' value={5} />

        <div className='text-sm text-red-500'>{state?.errors?.body?.[0]}</div>

        <div className='flex justify-end gap-2'>
          <Button type='button' size='sm' variant='outline' onClick={onClose}>
            Cancel
          </Button>

          <SubmitButton>Submit</SubmitButton>
        </div>
      </form>
    </div>
  );
}
