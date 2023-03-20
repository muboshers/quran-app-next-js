import React from 'react';
import {Container} from "@/src/layout/container";
import {Typography} from "@/src/components";
import {BaseLayout} from "@/src/layout/base-layout";

function Settings() {
    return (
        <BaseLayout>
            <Container>
                <Typography textSize={"h3"} textWeight={"w_500"} tag={"h3"} color={"text"}>
                    Settings
                </Typography>
            </Container>
        </BaseLayout>
    );
}

export default Settings;