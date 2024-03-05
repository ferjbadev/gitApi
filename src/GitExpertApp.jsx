import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            console.log('Elemento ya incluido, por ingrese otro valor');
            return;
        }
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Git Expert App</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category}
                    />
                ))
            };
        </>
    )

}

