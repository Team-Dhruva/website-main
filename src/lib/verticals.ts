export interface Verticals {
    name: string;
    slug: string;
    image?: string;
    description?: string;
    
}

export const verticals: Verticals[] = [
    {
        name: "Data Driven Astronomy",
        slug: "data-driven-astronomy",
        description: "",
        
        image: "/projects/6-inch.webp"
    },
    {
        name: "Optical Astronomy",
        slug: "optical-astronomy",
        description: "",
        
        image: "/projects/moon.webp"
    },
    {
        name: "Radio Astronomy",
        slug: "radio-astronomy",
        description: "",
        
        image: "/projects/solar-radio.webp"
    },
    {
        name: "Research Division",
        slug: "research-division",
        description: "",
        
        image: "/projects/hornantenna.jpg"
    }
];
