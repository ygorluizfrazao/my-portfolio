import Project from "./entities/Project.js";
import createProjectCard from "./ui/ProjectCard.js";
import SupabaseProjectRepository from "./repository/supabase/SupabaseProjectsRepository.js";

const { createClient } = supabase;
const supabaseUrl = "https://wzgymqckrzypylpxrnpj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6Z3ltcWNrcnp5cHlscHhybnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2MzIzOTgsImV4cCI6MTk5ODIwODM5OH0.i9kLdGlDEQxP9yGzN-cKUzi2bkCSzxMurU7PwTvalvY";

let projects;

$(document).ready(() => {
  SupabaseProjectRepository.fetchProjects((projectsResult) => {
    if (!!projectsResult.error) {
      alert("Erro: " + projectsResult.error);
      return;
    }

    if (!projectsResult.data) {
      alert("Error: Não foram localizados projetos para exibir");
      return;
    }

    projects = projectsResult.data.map((p) => {
      return new Project({
        id: p.id,
        name: p.name,
        description: p.description,
        createdAt: p.created_at,
        platform: p.platform,
        githubLink: p.github_link,
        siteLink: p.site_link,
        playStoreLink: p.play_store_link,
        appStoreLink: p.apple_store_link,
        tags: p.tags,
        projectImages: p.projectImages,
      });
    });

    $(".projects-board").html("");
    projects.forEach((project) => {
      const article = $(`<article></article>`).append(
        createProjectCard(project)
      );
      $(".projects-board").append(article);
    });

    startSlides();
  });
});

function startSlides() {
  $(".slide-show").slick({
    autoplay: true,
    infinite: true,
    dots: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
  });
}
