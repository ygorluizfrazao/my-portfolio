export default class Project {

    #id
    get id() {
        return this.#id
    }
    #name
    get name() {
        return this.#name
    }
    #description
    get description() {
        return this.#description
    }
    #createdAt
    get createdAt() {
        return this.#createdAt
    }
    #platform
    get platform() {
        return this.#platform
    }
    #githubLink
    get githubLink() {
        return this.#githubLink
    }
    #siteLink
    get siteLink() {
        return this.#siteLink
    }
    #playStoreLink
    get playStoreLink() {
        return this.#playStoreLink
    }
    #appStoreLink
    get appStoreLink() {
        return this.#appStoreLink
    }
    #tags
    get tags() {
        return this.#tags
    }
    #projectImages
    get projectImages() {
        return this.#projectImages
    }

    constructor(params){
        this.#id = params.id;
        this.#name = params.name;
        this.#description = params.description;
        this.#createdAt = params.createdAt;
        this.#platform = params.platform;
        this.#githubLink = params.githubLink;
        this.#siteLink = params.siteLink;
        this.#playStoreLink = params.playStoreLink;
        this.#appStoreLink = params.appStoreLink;
        if(!!params.tags){
            this.#tags = params.tags.split(',')
        }
        if(!!params.projectImages){
            this.#projectImages = params.projectImages
        }
    }
}