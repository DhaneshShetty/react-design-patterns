import viteLogo from '/vite.svg';
import './Post.css';
import { CommentSection } from './CommentSection';

export type CommentsType = {
    id: number; 
    text: string; 
    status: 'posted' | 'pending'
}

export type PostType = {
    id: number;
    title: string;
    content: string;
    comments: CommentsType[];
};

export const Post = (props: {data: PostType}) => {
  return (
        <div className='post'>
            <div className='postImage'>
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </div>
            <p>{props.data.title}</p>
            <CommentSection id={props.data.id} comments={props.data.comments}/>
        </div>
    );
};

export default Post;