import React from "react";
import { GetCharacterResults, Character } from "../../types";
import Styles from "../../styles/CharacterPage.module.css";

const CharacterPage = ({ character }: { character: Character }) => {
  return (
    <div className={Styles.container}>
      <span className={Styles.name}> {character.name}</span>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();
  return {
    paths: results.map((character) => {params: {id: String(character.id)}}),
  };
};

export const getStaticProps = async ({params}: {params: { id: string }; }) => {
  const res = await fetch(
    `https://rickandmorthyapi.com/api/character/${params.id}`
  );
  const character = res.json();

  return {
    props: {
      character,
    },
  };
};

export default CharacterPage;
