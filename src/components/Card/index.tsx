import { dateFormatterRelativeToNow } from "../../utils/formatter";
import { CardContainer, CardDescription, CardTitle } from "./styles";

interface Issue {
  number: number
  title: string
  body: string
  created_at: string
}

export function Card({number, title, body, created_at}: Issue) {
  const publishedDateRelativeToNow = dateFormatterRelativeToNow(new Date(created_at))

  return (
    <CardContainer to={`/post/${number}`}>
      <CardTitle>
        <h1>{title}</h1>
        <h2>{publishedDateRelativeToNow}</h2>
      </CardTitle>
      <CardDescription>
        {body && body.substr(0,150) +'...'}
      </CardDescription>
    </CardContainer>
  )
}