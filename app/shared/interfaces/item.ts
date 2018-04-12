import { Comment } from '../shared';
interface Item {
    id: number,
    text: string,
    chosen: boolean,
    comments: Array <Comment>
}
export default Item