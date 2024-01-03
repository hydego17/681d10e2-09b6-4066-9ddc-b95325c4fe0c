"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeftIcon, CircleUserRound, PlusIcon } from "lucide-react";

import { PostComment } from "@/types/schema";
import { queryKeys } from "@/lib/query-keys";
import { capitalize } from "@/lib/utils";
import AddCommentForm from "@/components/add-comment-form";
import { Button } from "@/components/ui/button";
import { getCommentsByPost, getPostDetail } from "@/app/actions";

export default function PostDetailPage({ params }: { params: Record<string, any> }) {
  const postId = params.id;
  const router = useRouter();

  const queryClient = useQueryClient();

  // Local States
  const [showForm, setShowForm] = useState(false);

  // Get Post Detail
  const { data: post, isLoading: loadingPost } = useQuery({
    queryKey: [queryKeys.posts, postId],
    queryFn: () => getPostDetail(postId),
    enabled: !!postId,
  });

  // Get Posts Comments
  const { data: postComments, isLoading: loadingPostComments } = useQuery({
    queryKey: [queryKeys.postComments, postId],
    queryFn: () => getCommentsByPost(postId),
    enabled: !!postId,
  });

  const handleBack = () => {
    return router.back();
  };

  const handleAddComment = async (newComment: PostComment) => {
    const uniqueId = Math.random().toString(16).slice(2);
    const prevComments = postComments?.comments ?? [];
    const updatedComments = {
      ...postComments,
      total: postComments?.total! + 1,
      comments: [{ ...newComment, id: uniqueId }, ...prevComments],
    };
    queryClient.setQueryData([queryKeys.postComments, postId], updatedComments);

    setShowForm(false);
  };

  return (
    <div className='py-10 container max-w-screen-sm'>
      <div>
        <Button size='sm' variant='outline' onClick={handleBack}>
          <ArrowLeftIcon size={10} className='mr-1.5' />
          <span className='text-xs'>Go back</span>
        </Button>
      </div>

      {/* Post Detail Section */}
      <section className='mt-8'>
        {loadingPost ? (
          <div>
            <div className='animate-pulse rounded-md bg-muted h-[16px] w-[100px]' />
            <div className='animate-pulse rounded-md bg-muted h-[26px] w-[80%] mt-4' />
            <div className='flex gap-2'>
              <div className='animate-pulse rounded-md bg-muted h-[20px] w-[80px] mt-4' />
              <div className='animate-pulse rounded-md bg-muted h-[20px] w-[80px] mt-4' />
            </div>
            <div className='mt-6'>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="className='animate-pulse rounded-md bg-muted h-[14px] mt-3" />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className='text-xs flex items-center gap-1 text-foreground/75'>
              <CircleUserRound size={14} />
              u/User{post?.userId}
            </div>

            <h1 className='mt-3 text-xl md:text-2xl font-bold'>{post?.title}</h1>

            <div className='mt-3 flex justify-between items-center'>
              <div className='flex gap-1.5'>
                {post?.tags.map((tag) => (
                  <span key={tag} className='py-1 px-2.5 border rounded-xl text-xs bg-muted'>
                    {capitalize(tag)}
                  </span>
                ))}
              </div>
            </div>

            <article className='mt-6 text-mini md:text-base'>{post?.body}</article>
          </div>
        )}
      </section>

      <hr className='my-8' />

      {/* Comments Section */}
      <section className='mt-4'>
        {loadingPostComments ? (
          <div>
            <div className='flex items-center justify-between'>
              <div className='animate-pulse rounded-md bg-muted h-[20px] w-[120px]' />
              <div className='animate-pulse rounded-md bg-muted h-[20px] w-[150px]' />
            </div>
            <div className='mt-4'>
              {[...Array(5)].map((_, i) => (
                <div key={i} className='animate-pulse rounded-md bg-muted h-[20px] mt-3 ' />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className='flex items-center justify-between'>
              <span className='text-mini font-medium'>All Comments ({postComments?.comments?.length})</span>
              <Button onClick={() => setShowForm(true)} size='sm' variant='outline' className='rounded-full'>
                <PlusIcon size={14} className='mr-2' />
                Add Comment
              </Button>
            </div>

            <div className='mt-4 -mx-1 space-y-2'>
              {showForm && (
                <AddCommentForm onCommentAdded={handleAddComment} postId={postId} onClose={() => setShowForm(false)} />
              )}

              {postComments?.comments.map((c) => (
                <div key={c.id} className='p-3 pb-4 border rounded-md'>
                  <div className='text-xs flex items-center gap-1 text-foreground/75'>
                    <CircleUserRound size={14} />
                    u/{c.user.username}
                  </div>
                  <div className='mt-3 text-mini md:text-base'>{c.body}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
