import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import edit from "assets/img/edit.png";
import profileImg from "assets/img/Ingredient_rosemary.jpg";
import { warnAlert, successAlert } from "components/commons/Alert";
import { editMember } from "api/MyPageApi";

const Container = styled.div`
	margin-top: 7rem;
`

const ProfileImage = styled.div`
  position: relative;
	display: inline-block;
  top: 1rem;
  width: 12rem;
  input {
    display: none;
  }
`;

const Image = styled.img`
  border-radius: 4rem;
  height: 8rem;
  width: 8rem;
  margin-left: 2rem;
  cursor: pointer;
`;

const Edit = styled.img`
  position: relative;
  left: -2rem;
  cursor: pointer;
  width: 1.5rem;
`;

const NickName = styled.div`
  position: relative;
	display: inline-block;
	top: -4rem;
	left: 3rem;
  width: 15rem;
`;

const ConfirmNickName = styled.div`
  position: relative;
	display: inline-block;
`;

const H1 = styled.div`
	font-weight: bold;
	font-size: 40px;
`

const EditNickName = styled.input`
  position: relative;
	display: inline-block;
  width: 15rem;
	border: none;
	border-bottom: 1px solid;
	outline: none;
	font-size: 39px;
	font-weight: bold;
`;

const Email = styled.div`
  position: relative;
	display: inline-block;
	top: -2rem;
	left: -12rem;
`;



const Userinfo = ({image, nickname, email, UserInfo}) => {
  const [showNickname, setShowNickname] = useState(true);
  const [saveNickname, setSaveNickname] = useState();
  const [flag, setFlag] = useState();

  if (!flag && nickname != undefined){setSaveNickname(nickname); setFlag(1)}

    // window.location.reload();
  const formData = new FormData();
  const onFileUpload = async (e) => {
    let file_kind = e.target.value.lastIndexOf(".");
    let file_name = e.target.value.substring(file_kind + 1, e.length);
    let file_type = file_name.toLowerCase();
    let check_file_type = new Array();
    check_file_type = ["jpg", "gif", "png", "jpeg"];
    
    if (check_file_type.indexOf(file_type) == -1) {
      warnAlert("이미지 파일만 선택할 수 있습니다.");
      return false;
    }
    
    formData.append("profile_image_url", e.target.files[0]);
    console.log(e)
    console.log(e.target.files[0])
    for (let key of formData.keys()) { console.log(key, ":", formData.get(key)); }
    const response = await editMember(UserInfo, formData)
    console.log(response)
    
    
    // editMember(UserInfo, formData).then(() => {
      //   setIsLoading(true);
      //   console.log(formData)
      // })
      // .catch(() => console.log(formData))
    };
    

	const onShowName = (e) => {
		if(e.target.value.length === 0 && e.keyCode === 13){
      warnAlert("닉네임은 1글자 이상 8글자 이하입니다!");
	}
		else if(e.keyCode === 13){
      successAlert("닉네임 변경에 성공하셨습니다!");
			setSaveNickname(e.target.value)
      formData.append("nickname", e.target.value)
			setShowNickname(true)

      editMember(UserInfo, formData)
      .then((res) => 
      {console.log(res)
      })
      .catch((err) => 
        {console.log(err)
          console.log(formData)
        })
		}
  };

	const onEditName = (e) => {
			setShowNickname(false)
  };

  return (
    <>
      <Container>
        <ProfileImage>
          <label htmlFor="file-input">
            {image ? (
              <Image src={image} alt="이미지를 찾을 수 없습니다." />
            ) : (
              <Image src={profileImg} alt="이미지를 찾을 수 없습니다." />
            )}
            <Edit src={edit} />
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/gif, image/jpeg, image/png, image/jpg"
            onChange={onFileUpload}
          />
        </ProfileImage>

		    <NickName>
				  {showNickname ? (
						<ConfirmNickName
						  onClick={onEditName}
						>
						<H1>{saveNickname}</H1>
						</ConfirmNickName>
            ) : (
						<EditNickName
            onKeyUp={onShowName}
						defaultValue={saveNickname}
						minLength={1}
						maxLength={8}
						/>
          )}
				</NickName>
				<Email>
				{email}
				</Email>
      </Container>
    </>
  );
};

export default Userinfo;
