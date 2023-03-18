import React, { useState } from "react";
import { Input } from "@/src/components";
import { SearchIcon } from "@/src/icons";
import { SearchBoxStyle } from "./search-box.styles";

export function SearchBox() {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchBoxStyle>
      <Input
        type={"text"}
        placeholder={"Search"}
        icon={<SearchIcon />}
        iconPosition={"right"}
        name={"search"}
        value={query}
        onChange={(e: React.ChangeEvent<any>) => setQuery(e.target.value)}
      />
    </SearchBoxStyle>
  );
}
