import type { GetStaticProps, NextPage } from "next";
import { Character, GetCharacterResults } from "../types";
import Style from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import imageLoader from "../imageLoader";
const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="descruption" content="page about rick and morty" />
      </Head>
      <div className={Style.container}>
        {characters.map((character) => (
          <div key={character.id} className={Style.character__container}>
            <Image
              loader={imageLoader} //we need a loader in case we want to build app
              unoptimized //becouse the images are allready hosted in rick and morty page
              height={"100px"}
              width={"100px"}
              src={character.image}
              className={Style.character__image}
            />
            <span>{character.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

//getStaticProps se renderiza antes de que se cree la pagina y se envia como props
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json(); //result-> when u only have 1 result
  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
