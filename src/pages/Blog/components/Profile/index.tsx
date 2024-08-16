import { Avatar, ProfileContainer, ProfileContent, ProfileDescription, ProfileFooter, ProfileTitle } from "./styles";
import avatar from '../../../../assets/avatar.png'
import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from "react-icons/fa6";

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src={avatar} alt="" />
      <ProfileContent>
        <ProfileTitle>
          <h1>Cameron Williamson</h1>
          <a href="#">GITHUB <FaArrowUpRightFromSquare /></a>
        </ProfileTitle>
        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </ProfileDescription>
        <ProfileFooter>
          <span>
            <FaGithub />
            cameronwll
          </span>
          <span>
            <FaBuilding />
            Rocketseat
          </span>
          <span>
            <FaUserGroup />
            32 seguidores
          </span>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>  
  )
}