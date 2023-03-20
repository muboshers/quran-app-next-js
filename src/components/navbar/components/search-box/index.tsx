import React, {useState} from "react";
import {SearchBoxStyle} from "./search-box.styles";
import {Button, Input} from "@/src/components";
import {SearchIcon} from "@/src/icons";

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
            <Button color={"text"} background={"transparent"} hover={"transparent"} border={"border_blue"} borderRadius={"border_50"} align={"center"} padding={"padding_10"}><SearchIcon /></Button>
        </SearchBoxStyle>
    );
}