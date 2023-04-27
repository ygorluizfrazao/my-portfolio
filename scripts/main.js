import Project from "./entities/Project.js";

const { createClient } = supabase;
const supabaseUrl = "https://wzgymqckrzypylpxrnpj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6Z3ltcWNrcnp5cHlscHhybnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2MzIzOTgsImV4cCI6MTk5ODIwODM5OH0.i9kLdGlDEQxP9yGzN-cKUzi2bkCSzxMurU7PwTvalvY";

let projects

$(document).ready((e) => {
  $(".slide-show").slick({
    autoplay: true,
    infinite: true,
    dots: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
  });

  fetchProjects();
});

async function fetchProjects() {
  const _supabase = createClient(supabaseUrl,supabaseKey);
  const { data, error } = await _supabase.from("project").select();
  projects = data
  const project1 = new Project(data[0])
  console.log(project1)
}

function createProjectCard(project){

}