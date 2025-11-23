import { startTransition, useOptimistic, useRef, useState } from "react";
import type { CommentsType } from "./Post";

async function sendCommentToServer(comment: CommentsType) {
    // simulate network
    await new Promise((r) => setTimeout(r, 2000));

    if (Math.random() < 0.2) throw new Error("Network failed");
    console.log(`Comment posted ${comment.text}`);
    return { success: true };
}

export const CommentSection = (props: { id:number, comments: CommentsType[] }) => {
    const [comments, setComments] = useState<CommentsType[]>(props.comments);
    const [optimisticComments, addOptimisticComment] = useOptimistic(comments,
         (curr: CommentsType[], neww: CommentsType) => [...curr, neww]
    );
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddComment = async() => {
        if(inputRef.current){
            const newComment: CommentsType = {
                id: Date.now(),
                text: inputRef.current.value,
                status: 'pending'
            };
            inputRef.current.value = '';
        
            
            addOptimisticComment(newComment);
            // Api call to actually add comment would go here
            try {
                await sendCommentToServer(newComment);
                setComments((prev) => [...prev, {...newComment, status: 'posted'}]);
            } catch(err) {
                console.error("Failed to add comment", err);
                setComments((prev)=> prev);
            }
        }
    }


    return (
        <div>
            <div style={{"display":"flex", "flexDirection": "row"}}>
                <input type="text" style={{width:"80%", borderRadius: '8px'}}placeholder="Add a comment" ref={inputRef}/>
                <button onClick={()=> startTransition(()=>handleAddComment())}>Add Comment</button>
            </div>
            <div>
                {optimisticComments.map(comment => (
                    <div key={comment.id} style={{"opacity": comment.status === 'pending' ? 0.5 : 1}}>
                        {comment.text}
                        {comment.status==='pending' && <p style={{color: '#ababab'}}>Sending...</p>}
                    </div>
                ))}
            </div>

        </div>
    );
}