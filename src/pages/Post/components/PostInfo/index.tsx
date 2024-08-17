import { FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa";
import { PostInfoContainer, PostInfoFooter, PostInfoHeader } from "./styles";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { dateFormatterRelativeToNow } from "../../../../utils/formatter";

interface PostInfoProps {
  createdAt: string
  title: string
  url: string
  comments: number
  login: string
}

export function PostInfo({createdAt, title, url, comments, login}: PostInfoProps) {
  console.log(createdAt)
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <Link to='/'>
          <FaChevronLeft />
          VOLTAR
        </Link>
        <Link to={url} target="_blank">
          VER NO GITHUB 
          <FaArrowUpRightFromSquare />
        </Link>
      </PostInfoHeader>
      <h1>{title}</h1>
      <PostInfoFooter>
        <span>
          <FaGithub />
          {login}
        </span>
        <span>
          <FaCalendarDay />
          {dateFormatterRelativeToNow(new Date())}
        </span>
        <span>
          <FaComment />
          {comments} comentários
        </span>
      </PostInfoFooter>
    </PostInfoContainer>
  )
}