import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import About from '../components/About';
import Evolution from '../components/Evolution';
import PokemonInfo from '../components/PokemonInfo';
import Stats from '../components/Stats';
import Tabs from '../components/Tabs';
import usePokemon from '../hooks/usePokemon';
import useSpecies from '../hooks/useSpecies';
import { PokemonResponse } from '../types/index';

type Params = {
    id: string,
}

type Tab = 'about' | 'stats' | 'evolution';

const DetailPage:React.FC = () => {
    const { id } = useParams<Params>();
    const [selectedTab, setSelectedTab] = useState<Tab>('about');

    const pokemonResult = usePokemon<PokemonResponse>(id);
    const speciesResult = useSpecies(id ? id : '');

    const {
        name,
        baseExp,
        height,
        weight,
        stats,
        abilities,
        types
    } = useMemo(() => ({
        name: pokemonResult.data?.data.name,
        types: pokemonResult.data?.data.types,
        height: pokemonResult.data?.data.height,
        weight: pokemonResult.data?.data.weight,
        abilities: pokemonResult.data?.data.abilities,
        baseExp: pokemonResult.data?.data.base_experience,
        stats: pokemonResult.data?.data.stats,
    }), [pokemonResult])
    const {
        color,
        growthRate,
        flavorText,
        genderRate,
        isLegendary,
        isMythical,
        evolutionChainUrl
    } = useMemo(() => ({
        color: speciesResult.data?.data.color,
        growthRate: speciesResult.data?.data.growth_rate.name,
        flavorText: speciesResult.data?.data.flavor_text_entries[0].flavor_text,
        genderRate: speciesResult.data?.data.gender_rate,
        isLegendary: speciesResult.data?.data.is_legendary,
        isMythical: speciesResult.data?.data.is_mythical,
        evolutionChainUrl: speciesResult.data?.data.evolution_chain.url,
    }), [speciesResult]);

    const handleClick = (tab: Tab) => {
        setSelectedTab(tab);
    }

    return (
        <div>
            <PokemonInfo id={id ? id : ''} name={name} types={types} color={color} />
            <Tabs tab={selectedTab} onClick={handleClick} color={{name: "red", url: ""}} />
            {
                selectedTab === 'about' && (
                    <About 
                        isLoading={pokemonResult.isLoading || pokemonResult.isLoading} 
                        color={color}
                        genderRate={growthRate}
                        isLegendary={isLegendary}
                        isMythical={isMythical}
                        types={types}
                        weight={weight}
                        height={height}
                        baseExp={baseExp}
                        abilities={abilities}
                    />
                )
            }
            {
                selectedTab === 'stats' && (
                    <Stats 
                        isLoading={pokemonResult.isLoading || speciesResult.isLoading}
                        color={color}
                        stats={stats}
                    />
                )
            }
            {
                selectedTab === 'evolution' && (
                    <Evolution 
                        id={id}
                        isLoading={pokemonResult.isLoading || speciesResult.isLoading} 
                        color={color}
                        url={evolutionChainUrl ? evolutionChainUrl : ''}
                    />

                )
            }
        </div>
    );
};

export default DetailPage;