<svelte:head>
  <title>Optical Astronomy</title>
</svelte:head>

<script>
  let cards = [
    { title: "10” Newtonian Reflector Telescope", description: "Description", image:"https://media.sciencephoto.com/image/r6140169/800wm/R6140169-Open_star_cluster_NGC_2451.jpg", link:"https://github.com/Team-Dhruva/website-main" },
    { title: "6” Reflector Newtonian Telescope", description: "Description", image: "https://pswscience.org/wp-content/uploads/2018/08/ns_gw_art-1024x576.jpg", link :"https://github.com/Team-Dhruva/website-main" },
    { title: "Project ballman", description: "Description", image: "https://i1.wp.com/www.thephysicsmill.com/blog/wp-content/uploads/nanograv.jpeg?fit=1585%2C1189", link:"https://github.com/Team-Dhruva/website-main" },
    { title: "Astrophotography", description: "Description", image: "https://astrobiology.nasa.gov/uploads/filer_public_thumbnails/filer_public/48/5f/485fedff-acf9-4d62-b817-4ede5fcb0240/artist_s_impression_of_gaia.jpg__930x580_q85_crop_subject_location-465%2C290_subsampling-2.jpg", link:"https://github.com/Team-Dhruva/website-main" },
    { title: "Optical Research", description: "Description", image: "https://sloan.org/storage/app/media/programs/science/SDSS/cropped-images/hero%20image%20sloan_telescope-0-182-1200-714-1462225014.jpg", link:"https://github.com/Team-Dhruva/website-main" },
  ];
</script>

<style>
  .banner {
    width: 100%;
    height: 80vh;
    background: url('https://scitechdaily.com/images/Supermassive-Black-Holes-Emit-Gravitational-Waves-scaled.jpg') center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }
  .banner h1 {
    font-size: 4rem;
    font-weight: bold;
  }
  .container {
    font-size: 1.5rem;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  .card {
    color: white;
    background: black;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    text-decoration: none; /* Remove underline from links */
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .card h3, .card p {
    margin: 0;
  }
  .description {
    font-size: 0.9rem; /* Adjust the font size as needed */
  }
  @media (max-width: 768px) {
    .banner h1 {
      font-size: 2.5rem;
    }
    .container {
      font-size: 1.2rem;
    }
  }
</style>

<div class="banner">
  <h1>Optical Astronomy</h1>
</div>

<div class="container">
  <p>Beauty lies in the eyes of the beholder.</p>
</div>

<div class="grid container">
  {#each cards as card}
    <a class="card" href={card.link} target="_blank" rel="noopener noreferrer">
      <img src={card.image} alt={card.title} />
      <h3>{card.title}</h3>
      <p class="description">{card.description}</p>
    </a>
  {/each}
</div>