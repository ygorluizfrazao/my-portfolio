import ProjectImage from "../../entities/ProjectImage.js";

const { createClient } = supabase;

export default class SupabaseProjectRepository {
    
  static supabaseUrl = "https://wzgymqckrzypylpxrnpj.supabase.co";
  static supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6Z3ltcWNrcnp5cHlscHhybnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2MzIzOTgsImV4cCI6MTk5ODIwODM5OH0.i9kLdGlDEQxP9yGzN-cKUzi2bkCSzxMurU7PwTvalvY";

  static async fetchProjects(callback) {
    if (!callback) return;

    const _supabase = createClient(this.supabaseUrl, this.supabaseKey);
    const { data, error } = await _supabase.from("project").select(
      `
            *,
            project_images (
              *
            )
          `
    );

    if (!!error) {
      callback({ undefined, error });
      return;
    }

    for (let i in data) {
      const item = data[i];
      const projectImages = !!item.project_images
        ? await Promise.all(
            item.project_images.map(async (image) => {
              const imageURLData = await _supabase.storage
                .from(image.bucket)
                .getPublicUrl(
                  image.path + "/" + image.project_id + "/" + image.name
                );

              return new ProjectImage({
                id: image.id,
                description: image.description,
                url: imageURLData.data.publicUrl,
              });
            })
          )
        : null;

      delete data[i].project_images;
      data[i].projectImages = projectImages;
    }
    callback({ data, error });
  }
}
