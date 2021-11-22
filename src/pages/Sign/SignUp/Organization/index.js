import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const Division = styled.div`
  width: 30vw;
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;
const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  font-size: 20px;
  border: 1px solid black;
  outline: none !important;
  padding: 0px;
  &:focus {
    background-color: lightgray;
  }
  /* box-shadow: 0 0 3px 6px; */
`;

const AddressDivision = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 0.15fr;
  column-gap: 20px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  font-size: 15px;
  border: 1px solid black;
  font-weight: 700;
  outline: none !important;
  &:focus {
    background-color: lightgray;
  }
  /* box-shadow: 0 0 3px 6px; */
`;

const Popup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${(props) => (props.dis ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(1, 1, 1, 0.2);
`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const fileDom = useRef();
  const picDom = useRef();

  const [popup, setPopup] = useState(false);

  const [data, setData] = useState({
    pdf: undefined,
    mainAddress: "",
    subAddress: "",
    images: [],
  });

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setData((prevState) => {
      return { ...prevState, mainAddress: fullAddress };
    });
    setPopup(false);
  };

  const onClickPdfBtn = (e) => {
    e.preventDefault();
    fileDom.current.click();
  };

  const onClickPicBtn = (e) => {
    e.preventDefault();
    picDom.current.click();
  };

  const setPdf = (e) => {
    setData((prevState) => {
      return { ...prevState, pdf: e.target.files[0] };
    });
  };

  const setPic = (e) => {
    setData((prevState) => {
      return { ...prevState, images: [...data.images, e.target.files[0]] };
    });
  };

  const reMountMap = (popup) => {
    return popup ? (
      <DaumPostcode onComplete={handleComplete} style={{ width: "50%" }} />
    ) : null;
  };

  const setSubAddress = (e) => {
    setData((prevState) => {
      return { ...prevState, subAddress: e.target.value };
    });
  };

  const deletePdf = () => {
    setData((prevState) => {
      return { ...prevState, pdf: undefined };
    });
  };

  const deletePic = (number) => {
    setData((prevState) => {
      return {
        ...prevState,
        images: data.images.filter((e, idx) => idx !== number),
      };
    });
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Division>
        <Label>아이디</Label>
        <Input
          placeholder="영문자로 시작하는 영문자 또는 숫자 6~20자 "
          {...register("id", {
            required: true,
            minLength: 6,
            maxLength: 20,
            pattern: /^[a-z]+[a-z0-9]{5,19}$/g,
          })}
        />
        {errors.id && <p>Last name is required.</p>}
      </Division>
      <Division>
        <Label>비밀번호</Label>
        <Input
          placeholder="8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
          "
          type="password"
          {...register("password", {
            required: true,
            maxLength: 16,
            minLength: 8,
            pattern:
              /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
          })}
        />
        {errors.password && <p>password is required.</p>}
      </Division>
      <Division>
        <Label>기관명</Label>
        <Input
          placeholder="3자리 이상"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && <p>name is required.</p>}
      </Division>
      <Division>
        <Label>자원봉사기관 인증</Label>
        <Button onClick={onClickPdfBtn}>인증하기 (pdf 파일)</Button>
        <Input
          type="file"
          accept=".pdf"
          style={{ display: "none" }}
          ref={fileDom}
          onChange={setPdf}
        />
        {data.pdf && (
          <div style={{ marginTop: 5 }}>
            <span>{data.pdf.name}</span>
            <button onClick={deletePdf}>삭제</button>
          </div>
        )}
      </Division>
      <Division>
        <Label>주소</Label>
        <AddressDivision>
          <Input
            type="text"
            {...register("mainAddress", { required: true })}
            style={{ padding: 0, height: "50px", fontSize: "10px" }}
            value={data.mainAddress}
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              setPopup(true);
            }}
          >
            검색
          </Button>
        </AddressDivision>
        <Input
          type="text"
          {...register("subAddress", { required: true })}
          style={{ padding: 0, height: "50px", fontSize: "10px" }}
          value={data.subAddress}
          onChange={setSubAddress}
        />
        {errors.address && <p>address is required.</p>}
      </Division>
      <Division>
        <Label>기관 소개</Label>
        <Input
          as="textarea"
          placeholder="성심성의껏 입력해주세요."
          {...register("introducing", { required: true, minLength: 10 })}
          style={{ height: 300, resize: "none" }}
        />
        {errors.introducing && <p>introducing is required.</p>}
      </Division>
      <Division>
        <Label>기관 이미지 등록</Label>
        <Button onClick={onClickPicBtn}>사진 파일 첨부</Button>
        <Input
          type="file"
          accept=".gif, .jpg, .png, .jpeg"
          style={{ display: "none" }}
          ref={picDom}
          onChange={setPic}
        />
        {data.images && (
          <ul>
            {data.images.map((e, index) => (
              <li key={index}>
                <span>{e.name}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    deletePic(index);
                  }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}
        <Input type="submit" />
      </Division>
      <Popup dis={popup}>{reMountMap(popup)}</Popup>
    </Container>
  );
};

export default Signup;
