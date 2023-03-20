import React, {useEffect, useState} from 'react';
import {BaseLayout} from "@/src/layout/base-layout";
import {Container} from "@/src/layout/container";
import {Typography} from "@/src/components";

function NotFoundPage() {

    return (
        <BaseLayout>
            <Container>
                <div className="not-found-page-style">
                    <Typography textSize={"h1"} textWeight={"w_700"} tag={"h1"} color={"primary"}>
                        404
                    </Typography>
                </div>
            </Container>
        </BaseLayout>
    );
}

export default NotFoundPage;