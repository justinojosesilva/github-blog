import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface User {
  name: string
  login: string
  company: string
  followers: number
  bio: string
  avatar_url: string
  html_url: string
}

interface Issue {
  number: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
}

interface GithubContextType {
  user: User
  issue: Issue
  issues: Issue[]
  fetchIssues: (query?: string) => Promise<void>
  getIssue: (number: number) => Promise<void>
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const username = 'justinojosesilva'
  const repository = 'github-blog'
  const [user, setUser] = useState<User>({} as User)
  const [issues, setIssues] = useState<Issue[]>([])
  const [issue, setIssue] = useState<Issue>({} as Issue)

  const fetchUser = useCallback(async () => {
    const response = await api.get(`users/${username}`)
    const { name, login, company, followers, bio, avatar_url, html_url } = response.data

    setUser(
      {
        name,
        login, 
        company, 
        followers, 
        bio, 
        avatar_url,
        html_url
      } 
    )
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    if (query) {
      const response = await api.get(`search/issues?q=${query}%20repo:${username}/${repository}`)
      setIssues(response.data.items)
    } else {
      const response = await api.get(`repos/${username}/${repository}/issues`)
      setIssues(response.data)
    }
   
  }, [])

  const getIssue = useCallback(async (number: number) => {
    const response = await api.get(`repos/${username}/${repository}/issues/${number}`)
    console.log(response.data)
    setIssue(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
    fetchIssues()
  }, [fetchUser, fetchIssues])
  return (
    <GithubContext.Provider value={{
      user,
      issue,
      issues,
      fetchIssues,
      getIssue,
    }}>
      {children}
    </GithubContext.Provider>
  )
}