export default class Project {

    constructor(params){
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.createdAt = params.created_at;
        this.platform = params.platform;
        this.githubLink = params.github_link;
        this.siteLink = params.site_link;
        this.playStoreLink = params.play_store_link;
        this.appStoreLink = params.app_store_link;
        if(params.tags!=undefined && params.tags!=null){
            this.tags = params.tags.split(',')
        }
    }
}