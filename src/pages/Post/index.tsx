import { useParams } from "react-router-dom";
import { PostInfo } from "./components/PostInfo";
import { PostContainer, PostDescription } from "./styles";
import { useContext, useEffect } from "react";
import { GithubContext } from "../../contexts/GithubContext";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"

export function Post() {
  const { number } = useParams()
  const {issue, getIssue, user} = useContext(GithubContext)
  console.log('number', number)

  const loadIssue = () => {
    console.log('number', number)
    getIssue(Number(number))
  }

  useEffect(() => {
    loadIssue()
  }, [])

  return (
    <PostContainer>
      <PostInfo 
        createdAt={issue.created_at}
        title={issue.title}
        url={issue.html_url}
        comments={issue.comments}
        login={user.login}
      />

      <PostDescription>
        <Markdown remarkPlugins={[remarkGfm]}>
          {issue.body}
        </Markdown>        
      </PostDescription>
    </PostContainer>
  )
}