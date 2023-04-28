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

    constructor(params){
        this.#id = params.id;
        this.#name = params.name;
        this.#description = params.description;
        this.#createdAt = params.created_at;
        this.#platform = params.platform;
        this.#githubLink = params.github_link;
        this.#siteLink = params.site_link;
        this.#playStoreLink = params.play_store_link;
        this.#appStoreLink = params.app_store_link;
        if(!!params.tags){
            this.#tags = params.tags.split(',')
        }
    }
}