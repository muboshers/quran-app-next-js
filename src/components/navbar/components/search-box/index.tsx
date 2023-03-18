import React, {useState} from 'react';
import {SearchBoxStyle} from "@/src/components/navbar/components/search-box/search-box.styles";
import {Input} from "@/src/components";
import {SearchIcon} from "@/src/icons";

function SearchBox() {

    const [query, setQuery] = useState<string>("")

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

export default SearchBox;