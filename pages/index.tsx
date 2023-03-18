import type {NextPage} from "next";
import {BaseLayout} from "@/src/layout/base-layout";
import {Container} from "@/src/layout/container";

const Home: NextPage = () => {
    return (
        <BaseLayout>
            <Container>
                <h1>Home</h1>
            </Container>
        </BaseLayout>
    );
};

export default Home;
