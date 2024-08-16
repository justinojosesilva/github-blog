import { FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa";
import { PostInfoContainer, PostInfoFooter, PostInfoHeader } from "./styles";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <a href="#">
          <FaChevronLeft />
          VOLTAR
        </a>
        <a href="#">
          VER NO GITHUB 
          <FaArrowUpRightFromSquare />
        </a>
      </PostInfoHeader>
      <h1>JavaScript data types and data structures</h1>
      <PostInfoFooter>
        <span>
          <FaGithub />
          cameronwll
        </span>
        <span>
          <FaCalendarDay />
          Há 1 dia
        </span>
        <span>
          <FaComment />
          5 comentários
        </span>
      </PostInfoFooter>
    </PostInfoContainer>
  )
}