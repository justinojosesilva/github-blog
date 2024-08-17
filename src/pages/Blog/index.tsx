import { useContext } from "react";
import { Card } from "../../components/Card";
import { Profile } from "./components/Profile";
import { BlogCards, BlogContainer, BlogTitle, SearchForm } from "./styles";
import { GithubContext } from "../../contexts/GithubContext";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Blog() {
  const { issues, fetchIssues } = useContext(GithubContext)
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    fetchIssues(data.query)
  }
  return (
    <BlogContainer>
      <Profile/>

      <BlogTitle>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </BlogTitle>

      <SearchForm action="" onChange={handleSubmit(handleSearchIssues)}>
        <input 
          type="text" 
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchForm>

      <BlogCards>
        {issues && issues.map((issue) => {
          return (
            <Card 
              key={issue.number}
              number={issue.number}
              title={issue.title}
              body={issue.body}
              created_at={issue.created_at}
            />
          )
        })}
      </BlogCards>
      
    </BlogContainer>
  )
}