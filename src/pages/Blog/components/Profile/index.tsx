import { Avatar, ProfileContainer, ProfileContent, ProfileDescription, ProfileFooter, ProfileTitle } from "./styles";
import avatar from '../../../../assets/avatar.png'
import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from "react-icons/fa6";
import { useContext } from "react";
import { GithubContext } from "../../../../contexts/GithubContext";

export function Profile() {

  const { user } = useContext(GithubContext)

  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url} alt="" />
      <ProfileContent>
        <ProfileTitle>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank">GITHUB <FaArrowUpRightFromSquare /></a>
        </ProfileTitle>
        <ProfileDescription>
          {user.bio}
        </ProfileDescription>
        <ProfileFooter>
          <span>
            <FaGithub />
            {user.login}
          </span>
          <span>
            <FaBuilding />
            {user.company}
          </span>
          <span>
            <FaUserGroup />
            {user.followers} seguidores
          </span>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>  
  )
}