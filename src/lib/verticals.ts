export interface Vertical {
    name: string;
    slug: string;
    image?: string;
    description?: string;
    
}

export const verticals: Vertical[] = [
    {
        name: "Data Driven Astronomy",
        slug: "dda",
        description: "",
        
        image: "/projects/6-inch.webp"
    },
    {
        name: "Optical Astronomy",
        slug: "optical",
        description: "",
        
        image: "/projects/moon.webp"
    },
    {
        name: "Radio Astronomy",
        slug: "radio",
        description: "",
        
        image: "/projects/solar-radio.webp"
    },
    {
        name: "Research Division",
        slug: "research",
        description: "",
        
        image: "/projects/hornantenna.jpg"
    }
];
