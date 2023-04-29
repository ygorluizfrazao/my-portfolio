import Project from "./entities/Project.js";
import createProjectCard from "./ui/ProjectCard.js";
import SupabaseProjectRepository from "./repository/supabase/SupabaseProjectsRepository.js";
import MessagePanel from "./ui/MessagePanel.js";

let projects;
const errorMessagePanel = new MessagePanel(".message-panel");

$(document).ready(() => {
  console.log(errorMessagePanel);
  populateProjectsBoard(
    () => startSlides(),
    (erro) => {
      errorMessagePanel.displayMessage("Erro: " + erro
      ,()=> console.log("Closed by user"),
      7000)
    });
});

function populateProjectsBoard(onFinished, onError, onEmpty) {
  SupabaseProjectRepository.fetchProjects((projectsResult) => {
    if (!!projectsResult.error) {
      onError(projectsResult.error);
      return;
    }

    if (!projectsResult.data) {
      onEmpty();
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
    onFinished();
  });
}

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
