import { Card } from "../../components/Card";
import { Profile } from "./components/Profile";
import { BlogCards, BlogContainer, BlogTitle, SearchForm } from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <Profile/>

      <BlogTitle>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </BlogTitle>

      <SearchForm action="">
        <input type="text" placeholder="Buscar conteúdo"/>
      </SearchForm>

      <BlogCards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </BlogCards>
      
    </BlogContainer>
  )
}