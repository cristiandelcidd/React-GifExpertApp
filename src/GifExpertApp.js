import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Jackie Chan']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Pokemon'] );
    //     setCategories(cats => [...cats, 'Pokemon']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {
                categories.map(category => {
                // return <li key={ category }>{ category }</li>;
                    return (
                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                    )
                })
            }
        </>
    );
};

export default GifExpertApp;