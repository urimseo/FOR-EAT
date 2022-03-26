import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import edit from "assets/img/edit.png";
import profileImg from "assets/img/Ingredient_rosemary.jpg";
import { warnAlert, successAlert } from "components/commons/Alert";
// import { profileImage } from "api/user";

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



const Userinfo = (image, setImage) => {
  const [showNickname, setShowNickname] = useState(true);
  const [saveNickname, setSaveNickname] = useState("test");
  const onFileUpload = (e) => {
    console.log("FileUpload")
  };

	const onShowName = (e) => {
		if(e.target.value.length === 0 && e.keyCode === 13){
      warnAlert("닉네임은 1글자 이상 8글자 이하입니다!");
	}
		else if(e.keyCode === 13){
      successAlert("닉네임 변경에 성공하셨습니다!");
			setSaveNickname(e.target.value)
			setShowNickname(true)
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
            {image.image ? (
              <Image src={image.image} alt="이미지를 찾을 수 없습니다." />
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
				1seul357@gmail.com
				</Email>
      </Container>
    </>
  );
};

export default Userinfo;
