<svelte:head>
  <title>Radio Astronomy</title>
</svelte:head>

<script>
  let cards = [
    { title: "Solar Radio Telescope", description: "Description", image:"https://media.sciencephoto.com/image/r6140169/800wm/R6140169-Open_star_cluster_NGC_2451.jpg", link:"https://github.com/Team-Dhruva/website-main" },
    { title: "H21 Horn Telescope", description: "Description", image: "https://pswscience.org/wp-content/uploads/2018/08/ns_gw_art-1024x576.jpg", link :"https://github.com/Team-Dhruva/website-main" },
    { title: "Radio JOVE", description: "Description", image: "https://i1.wp.com/www.thephysicsmill.com/blog/wp-content/uploads/nanograv.jpeg?fit=1585%2C1189", link:"https://github.com/Team-Dhruva/website-main" },
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
  <h1>Radio Astronomy</h1>
</div>

<div class="container">
  <p>Where we design, build, and operate our own radio telescopes, advancing both our skills and the field of radio astronomy through hands-on projects and meaningful research</p>
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