'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { submitPost } from './actions'
import { useSession } from '@/app/(main)/SessionProvider'
import UserAvatar from '@/components/UserAvatar'
import { Button } from '@/components/ui/button'
import './styles.css';

const PostEditor = () => {
  const {user} = useSession();
  const editor = useEditor({
    extensions: [
        StarterKit.configure({
            bold: false,
            italic: false
        }),
        Placeholder.configure({
            placeholder: "What's on your mind?"
        })
    ],
    
  });

  const input = editor?.getText({
    blockSeparator: "\n",
  }) || ""

  async function onSubmit() {
    await submitPost(input)
    editor?.commands.clearContent();
  }

  return <div className='flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm'>
    <div className='flex gap-5'>
      <UserAvatar avatarUrl={user.avatarUrl} className='hidden sm:inline' />
      <EditorContent
        editor={editor} 
        className='w-full max-h-[20rem] overflow-auto bg-background rounded-2xl px-5 py-3'
      />
    </div>

    <div className="flex justify-end">
      <Button 
        disabled={!input.trim()} 
        className='min-w-20'
        onClick={onSubmit}
      >
        Post
      </Button>
    </div>
  </div>
}

export default PostEditor
