import { TileBackground, TileWrapper, TileContent, Tile } from "./title";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkRight,
  WorkLink,
} from "./work";
import Image from "next/image";

const Works: React.FC = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We built</div>
              <div className="text-4xl md:te5xl font-semibold tracking-tight">
                <WorkLink href="/">Xxxx&apos;s xxxx</WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/iphone15.png"
                alt="Pink Panda"
                width={840}
                height={1620}
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We made</div>
              <div className="text-4xl md:te5xl font-semibold tracking-tight">
                Xxxx&nbsp;faster.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/iphone15.png"
                alt="Pink Panda"
                width={840}
                height={1620}
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We helped</div>
              <div className="text-4xl md:te5xl font-semibold tracking-tight">
                Xxxx&nbsp;faster.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/iphone15.png"
                alt="Pink Panda"
                width={840}
                height={1620}
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
