export default class ProjectImage {
    
    #id
    get id() { return this.#id }
    #description
    get description() { return this.#description }
    #url
    get url() { return this.#url }

    constructor(params){
        this.#id = params.id;
        this.#description = params.description;
        this.#url = params.url;
    }
}