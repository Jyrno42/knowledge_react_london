// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    Quote,
    Slide,
    Text,
    S,
    Layout,
    Fill,
    CodePane,
    Link,
    Image,
} from "spectacle";

import styled1 from 'raw-loader!./styled1.js.src';
import styled2 from 'raw-loader!./styled2.js.src';
import snapshot from 'raw-loader!./snapshot.js.src';
import offline from 'raw-loader!./offline.js.src';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    city: require("../assets/city.jpg"),
    kat: require("../assets/kat.png"),
    logo: require("../assets/formidable-logo.svg"),
    markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    secondaryMute: "rgba(0, 0, 0, 0.7)",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    lightning: "#face00",
    thorgate: "#ee6036",
}, {
    primary: "Montserrat",
    secondary: "Helvetica",
});


class TalkTitle extends React.Component {
    render() {
        const {title, author, company, summary, url} = this.props;
        return (
            <span>
                <Heading size={5} caps textColor="secondary">{title}</Heading>
                <Text margin="10px 0 0 0" textColor="primary" size={5} bold>
                    {author}{company ? `, ${company}` : ''}
                </Text>
                {url ? (
                    <Link
                        textColor="primary"
                        margin="1rem 0"
                        textSize="1.5rem"
                        style={{opacity: 0.75, display: 'inline-block'}}
                        href={`https://${url}`}
                    >
                        {url}
                    </Link>
                ) : null}
                {summary ? <Text textColor="secondaryMute" margin="1rem 0 3rem 0">{summary}</Text>: null}
            </span>
        );
    }
}

const Highlight = props => <S type="bold" textColor="primary">{props.children}</S>;
const TalkHeading = props => <Heading size={4} caps margin="0 0 3rem 0" textColor="primary">{props.children}</Heading>;
const TalkSubHeading = props => <Heading size={5} caps margin="0 0 1rem 0" textColor="primary">{props.children}</Heading>;
const TalkPoint = props => (
    <S type="" style={{display: 'block'}}  margin="0 0 0.8rem 0" textAlign="left" textColor="primary">
        • {props.children}
    </S>
);
const BlockLink = props => (
    <Link
        href={`https://${props.url}`}
        style={{
            ...props.style,
            opacity: 0.75,
            display: 'block',
            paddingLeft: '1rem'
        }}
        textColor="primary"
    >
        {props.url}
    </Link>
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="thorgate">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        React London 2017
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkTitle
                        title="Javascript code formatting"
                        author="Christopher Chedeau"
                        company="Facebook"
                        url="github.com/vjeux/prettier"
                        summary="prettier - a prettified code generator"
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkHeading>Prettier</TalkHeading>
                    <TalkPoint>Generates code from AST</TalkPoint>
                    <TalkPoint>Will account for max line length</TalkPoint>
                    <TalkPoint>Can be customized to preferred code style</TalkPoint>
                    <TalkPoint>Could be used as pre-commit hook</TalkPoint>
                </Slide>

                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkTitle
                        title="Logux"
                        author="Andrey Sitnik"
                        company="Evil Martians"
                        url="github.com/logux"
                        summary="redux over the wire"
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkHeading>Logux</TalkHeading>
                    <TalkPoint>Shared actions between client & server</TalkPoint>
                    <TalkPoint>Syncs actions on connect</TalkPoint>
                    <TalkPoint>Server runs on <Highlight>node.js</Highlight></TalkPoint>
                    <TalkPoint>Can customize log stores</TalkPoint>
                    <TalkPoint>Can proxy to legacy API (Django etc)</TalkPoint>
                    <TalkPoint><Highlight>Heavy WIP, lacking in docs</Highlight></TalkPoint>
                </Slide>

                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkTitle
                        title="What's in a language?"
                        author="Cheng Lou"
                        company="Facebook"
                        url="facebook.github.io/reason/"
                        summary="Reason - yet another js replacement"
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkHeading>Reason</TalkHeading>
                    <TalkPoint>Syntax/wrapper for OCaml</TalkPoint>
                    <TalkPoint>Can compile to Javascript</TalkPoint>
                    <TalkPoint>Type annotated</TalkPoint>
                    <TalkPoint>Solid module & inheritance implementation</TalkPoint>
                    <TalkPoint>DRY until compiled</TalkPoint>
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <CodePane
                        lang="javascript"
                        textSize="2rem"
                        source={"module School = {\n  type profession = Teacher | Director;\n\n  let person1 = Teacher;\n  let getProfession person =>\n    switch person {\n    | Teacher => \"A teacher\"\n    | Director => \"A director\"\n    };\n};"}
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkTitle
                        title="Styled components"
                        author="Max Stoiber"
                        company="Thinkmill"
                        url="github.com/styled-components/styled-components"
                        summary="hello future of modular styling"
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <CodePane lang="javascript" textSize="1rem" source={styled1} />
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <CodePane lang="javascript" textSize="1rem" source={styled2} />
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkHeading>styled-components</TalkHeading>
                    <Layout>
                        <Fill>
                            <TalkSubHeading>Cons</TalkSubHeading>
                            <TalkPoint>Performance concerns</TalkPoint>
                            <TalkPoint>Doesn't compile to css yet</TalkPoint>
                        </Fill>
                        <Fill>
                            <TalkSubHeading>Pros</TalkSubHeading>
                            <TalkPoint>Self-contained components</TalkPoint>
                            <TalkPoint>Highly dynamic styling without classes</TalkPoint>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkTitle
                        title="A tiny Fiber renderer"
                        author="Dustan Kasten"
                        summary="Walkthrough of building a React renderer"
                        url="github.com/iamdustan/tiny-react-renderer"
                    />
                    <TalkTitle
                        title="Weapons grade React"
                        author="Ken Wheeler"
                        company="Formidable Labs"
                        summary="Using a React renderer (react-hardware) for world domination"
                    />
                </Slide>

                {/* lightning talks */}
                <Slide transition={["fade"]} bgColor="lightning">
                    <TalkTitle
                        title="Snapshot testing"
                        author="Anna Doubkova"
                        company="Red Badger"
                        url="facebook.github.io/jest/docs/snapshot-testing.html"
                        summary="expect(thing).toMatchSnapshot()"
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="lightning">
                    <CodePane lang="javascript" textSize="1rem" source={snapshot} />
                </Slide>
                <Slide transition={["fade"]} bgColor="lightning">
                    <Image src="https://facebook.github.io/jest/img/content/failedSnapshotTest.png" width="100%" />
                </Slide>

                <Slide transition={["fade"]} bgColor="lightning">
                    <TalkTitle
                        title="Realtime Webpack"
                        author="Oliver Woodings"
                        company="Qubit"
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="lightning">
                    <TalkHeading>Optimizing webpack bundling</TalkHeading>
                    <TalkPoint>Preact instead of React where possible <BlockLink url="github.com/developit/preact" /></TalkPoint>
                    <TalkPoint>HappyPack for parallel module builds <BlockLink url="github.com/amireh/happypack" /></TalkPoint>
                    <TalkPoint>Buble instead of Babel where possible <BlockLink url="buble.surge.sh" /></TalkPoint>
                    <TalkPoint>Celery-style workers on an independent build server</TalkPoint>
                </Slide>

                <Slide transition={["fade"]} bgColor="lightning">
                    <TalkTitle
                        title="Offline for the greater good"
                        author="Jani Eväkallio"
                        company="Formidable Labs"
                        summary="Persistent Redux store for Offline-First applications"
                        url="github.com/jevakallio/redux-offline"
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="lightning">
                    <CodePane lang="javascript" textSize="1rem" source={offline} />
                </Slide>

                <Slide transition={["fade"]} bgColor="lightning">
                    <TalkTitle
                        title="Next.js in production"
                        author="Jasdeep Lalli"
                        company="Deliveroo"
                        summary="Like a polished & chained Thorgate SPA"
                        url="github.com/zeit/next.js"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkTitle
                        title="Spectacle"
                        author="Formidable Labs"
                        summary="not a talk, but the library powering this presentation"
                        url="github.com/FormidableLabs/spectacle"
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <TalkHeading>spectacle-code-slide</TalkHeading>
                    <Image src="https://github.com/thejameskyle/spectacle-code-slide/raw/master/demo.gif" width="100%" />
                </Slide>

                <Slide transition={["fade"]} bgColor="thorgate">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">Recorded talks (soon)</Heading>
                    <Heading size={6} caps lineHeight={1} textColor="primary">
                        at <BlockLink style={{marginTop: '1rem'}} url="tiny.cc/reactlondon2017" />
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="thorgate">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">thank you</Heading>
                    <Heading size={6} caps lineHeight={1} textColor="primary">Slides at</Heading>
                    <Heading size={6} fit caps lineHeight={1} textColor="primary">
                        <BlockLink style={{marginTop: '1rem'}} url="github.com/thorgate/knowledge_react_london" />
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
