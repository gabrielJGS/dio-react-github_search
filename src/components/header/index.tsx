import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

function Header() {
  const [userSearch, setUserSearch] = useState("");
  const { getUser } = useGithub();

  const submitGetUser = () => {
    if (!userSearch) return;
    const user = getUser ? getUser(userSearch) : null;
    return user;
  };
  
  const handleSubmit = (e: any) => {
    if (e.key == "Enter") {
      submitGetUser();
    }
  };

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o nome do usuário para pesquisar"
          onChange={(e) => setUserSearch(e.target.value)}
          onKeyDown={handleSubmit}
        />
        <button onClick={submitGetUser}>Buscar</button>
      </S.Wrapper>
    </header>
  );
}

export default Header;
